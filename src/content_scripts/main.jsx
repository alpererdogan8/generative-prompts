import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PromptsContextProvider from './context/Context_Api';
import './index.css';

//The created button is being added to the first index of the selected tag
const createHtmlSpan = () => {
	const nav = document.querySelector('nav');
	const header = document.querySelector(
		'body > div.relative.flex.h-full.w-full.overflow-hidden.transition-colors.z-0 > div.z-\\[21\\].flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary.max-md\\:\\!w-0 > div > div > div > nav > div.flex-col.flex-1.transition-opacity.duration-500.relative.-mr-2.pr-2.overflow-y-auto',
	);

	const button = document.createElement('span');
	button.id = 'generative_prompts';
	nav.insertBefore(button, header);

	return ReactDOM.createRoot(document.getElementById('generative_prompts')).render(
		<PromptsContextProvider>
			<App />
		</PromptsContextProvider>,
	);
};

// İlk yükleme için kontrol
if (document.querySelector('nav')) {
	createHtmlSpan();
}

// Sonraki değişiklikler için gözlem
const observe = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
			const nav = document.querySelector('nav');
			if (nav && !document.getElementById('generative_prompts')) {
				createHtmlSpan();
			}
		}
	});
});

observe.observe(document.body, {
	childList: true,
	subtree: true,
	attributes: true,
});
