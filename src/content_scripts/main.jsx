import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PromptsContextProvider from './context/Context_Api';
import './index.css';

const rootEl = document.querySelector('div[id="__next"]');

//The created button is being added to the first index of the selected tag
const createHtmlSpan = () => {
	const nav = document.querySelector('nav');
	const header = document.querySelector(
		'#__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary > div > div > div > div > nav > div.flex.justify-between.flex.h-14.items-center',
	);

	const button = document.createElement('span');
	button.id = 'generative_prompts';
	nav.insertBefore(button, header.nextSibling);

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
