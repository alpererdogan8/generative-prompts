import { useState, useEffect } from 'react';

export const useChromeExtensionStorage = (key) => {
	const [storedValue, setValue] = useState([]);

	//Manages Chrome extension store and pulls data
	const getStorage = async () => {
		const getSync = await chrome.storage.sync.get([key]);
		if (typeof getSync[key] === 'undefined') return;
		if (storedValue.length === 0) {
			setValue([...getSync[key]]);
		} else {
			setValue([...getSync[key], storedValue]);
		}
	};

	//Manages Chrome extension store and adds data
	const postStorage = async (obj) => {
		if (storedValue.length === 0) {
			return await chrome.storage.sync.set({ [key]: [obj] });
		}
		return await chrome.storage.sync.set({ [key]: [...storedValue, obj] });
	};

	//Manages Chrome extension store and adds delete
	const deleteStorage = async (filteredItems) => {
		return await chrome.storage.sync.set({ [key]: [...filteredItems] });
	};

	useEffect(() => {
		getStorage();
	}, [key]);

	//Adds or deletes from hook according to the status of new incoming parameter
	const setStoredValue = (stateValue, newValue = []) => {
		if (stateValue.toLowerCase() === 'add') {
			setValue([...storedValue, newValue]);
			if (newValue.length !== 0) postStorage(newValue);
		}
		if (stateValue.toLowerCase() === 'delete') {
			setValue(newValue);
			deleteStorage(newValue);
		}
	};

	return [storedValue, setStoredValue];
};
