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

	const handleSubmit = (e, data) => {
		const textarea = document.querySelector('.ProseMirror#prompt-textarea');
		setIsOpenModal(false);

		if (textarea) {
			// Textarea'yı güncelle
			textarea.innerHTML = `<p>${data}</p>`;
			textarea.dispatchEvent(new Event('input', { bubbles: true }));

			setTimeout(() => {
				// Enter tuşu simülasyonu
				textarea.dispatchEvent(
					new KeyboardEvent('keydown', {
						key: 'Enter',
						code: 'Enter',
						keyCode: 13,
						bubbles: true,
					}),
				);
			}, 500);
		}

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
