import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import PromptsContextProvider from './context/Context_Api';

const rootEl = document.querySelector('div[id="__next"]');

//The created button is being added to the first index of the selected tag
const createHtmlSpan = () => {
	const nav = document.querySelector('nav');

	const button = document.createElement('span');
	button.id = 'generative_prompts';
	button.className = 'flex items-center -mb-1 mt-2.5 w-full';

	nav.prepend(button);

	return ReactDOM.createRoot(document.getElementById('generative_prompts')).render(
		<PromptsContextProvider>
			<App />
		</PromptsContextProvider>,
	);
};

//Changes to the specified root tag are tracked
createHtmlSpan();
const observe = new MutationObserver(() => {
	createHtmlSpan();
});
observe.observe(rootEl, { childList: true });
