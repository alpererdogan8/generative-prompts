import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useChromeExtensionStorage } from '../hooks/useChromeExtensionStorage';
import { getAwesomePrompts } from '../service/API/AwesomePromptsAPI';
export const PromptsContext = createContext();

const PromptsContextProvider = ({ children }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [prompts, setPrompts] = useState([]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(false);
	const [storedValue, setStoredValue] = useChromeExtensionStorage('data');

	useEffect(() => {
		// Fetch the csv file from the specified url and convert it to json format with papaparse
		(async () => {
			setLoading(true);
			setPrompts(await getAwesomePrompts());
			setLoading(false);
		})();
	}, []);

	//Converted data is memorized for searching
	const promptsMemo = useMemo(() => {
		if (search === '') return prompts;

		return prompts.filter((items) =>
			[items].some((item) => item.act.toLowerCase().includes(search.toLowerCase())),
		);
	}, [prompts, search]);

	const textarea = document.getElementById('prompt-textarea');
	const sendButton = document.querySelector('[data-testid="fruitjuice-send-button"]');

	const handleSubmit = (e, data) => {
		const event = new Event('input', { bubbles: true });
		setIsOpenModal(false);
		textarea.value = data;
		textarea.dispatchEvent(event);
		sendButton.disabled = false;
		sendButton.classList.remove(
			'disabled:bg-[#D7D7D7]',
			'disabled:text-[#f4f4f4]',
			'disabled:hover:opacity-100',
			'dark:disabled:bg-token-text-quaternary',
			'dark:disabled:text-token-main-surface-secondary',
		);
		setTimeout(() => {
			sendButton.click();
		}, 150);

		setSearch('');
	};

	return (
		<PromptsContext.Provider
			value={{
				isOpenModal,
				setIsOpenModal,
				promptsMemo,
				prompts,
				loading,
				setSearch,
				handleSubmit,
				storedValue,
				setStoredValue,
			}}>
			{children}
		</PromptsContext.Provider>
	);
};

export const usePrompts = () => {
	return useContext(PromptsContext);
};

export default PromptsContextProvider;
