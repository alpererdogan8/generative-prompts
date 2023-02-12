import React from 'react';
import GenerateView from '../components/modal_components/generate_prompts_components/GenerateView';

const GeneratePrompt = () => {
	return (
		<div className="w-full flex flex-col items-center justify-between rounded-b-xl bg-[#474a58] !h-[84.5%]">
			<h1 className="w-full mt-3 text-center">ChatGPT Prompt Generator</h1>
			<GenerateView />
		</div>
	);
};

export default GeneratePrompt;
