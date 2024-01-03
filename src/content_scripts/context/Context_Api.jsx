import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getAwesomePrompts } from '../service/API/AwesomePromptsAPI';
import { fetchDataGeneratePrompt } from '../service/API/GeneratePromptsAPI';
import { useChromeExtensionStorage } from '../hooks/useChromeExtensionStorage';
import { v4 } from 'uuid';
export const PromptsContext = createContext();

const PromptsContextProvider = ({ children }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [prompts, setPrompts] = useState([]);
	const [search, setSearch] = useState('');
	const [generatePrompt, setGeneratePrompt] = useState({
		id: v4(),
		act: '',
		prompt: '',
	});
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(false);
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
	}, [prompts, search, page]);

	const form = document.querySelector('form');
	const button = form.querySelectorAll('button')[4];

	const handleSubmit = (e, data) => {
		e.preventDefault();
		setIsOpenModal(false);
		setSearch('');
		button.disabled = false;
		form.querySelector('#prompt-textarea').value = data;
		button.click();
	};

	const handleGeneratePrompt = async () => {
		setLoading(true);
		const _id = v4();
		const newPrompt = await fetchDataGeneratePrompt(generatePrompt.act);
		const objData = { _id, act: generatePrompt.act, prompt: newPrompt };
		setGeneratePrompt(objData);
		setStoredValue('add', objData);
		setLoading(false);
	};
	const handleDeleteGeneratedPrompt = (id) => {
		const filteredItems = storedValue.filter((item) => item?._id !== id);
		setStoredValue('delete', filteredItems);
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
				setPage,
				page,
				generatePrompt,
				setGeneratePrompt,
				handleGeneratePrompt,
				storedValue,
				setStoredValue,
				handleDeleteGeneratedPrompt,
			}}>
			{children}
		</PromptsContext.Provider>
	);
};

export const usePrompts = () => {
	return useContext(PromptsContext);
};

export default PromptsContextProvider;
