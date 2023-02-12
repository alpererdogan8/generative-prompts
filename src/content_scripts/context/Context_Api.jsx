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
	const button = document.querySelector(
		'#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.absolute.bottom-0.left-0.w-full.border-t.md\\:border-t-0.dark\\:border-white\\/20.md\\:border-transparent.md\\:dark\\:border-transparent.md\\:bg-vert-light-gradient.bg-white.dark\\:bg-gray-800.md\\:\\!bg-transparent.dark\\:md\\:bg-vert-dark-gradient > form > div > div.flex.flex-col.w-full.py-2.flex-grow.md\\:py-3.md\\:pl-4.relative.border.border-black\\/10.bg-white.dark\\:border-gray-900\\/50.dark\\:text-white.dark\\:bg-gray-700.rounded-md.shadow-\\[0_0_10px_rgba\\(0\\,0\\,0\\,0\\.10\\)\\].dark\\:shadow-\\[0_0_15px_rgba\\(0\\,0\\,0\\,0\\.10\\)\\] > button',
	);
	const handleSubmit = (e, data) => {
		setIsOpenModal(false);
		setSearch('');
		form.querySelector('textarea').value = data;
		button.click();
		e.preventDefault();
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
		console.table(storedValue);
		console.table(filteredItems);
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
