import React from 'react';
import Input from '../components/modal_components/Input';
import { usePrompts } from '../context/Context_Api';
import AwesomePrompt from './AwesomePrompt';
import GeneratePrompt from './GeneratePrompt';

const Main = () => {
	const { setSearch, page, setPage, setGeneratePrompt } = usePrompts();

	const changeInput = (e) => {
		!page ? setSearch(e.target.value) : setGeneratePrompt(e.target.value);
	};

	return (
		<div className="w-full h-full  dark:bg-[#343541]  rounded-xl">
			<div className="w-full drop-shadow-xl  flex justify-between items-center h-16 pb-2 px-5">
				<Input
					type="text"
					tabIndex="0"
					placeholder={
						!page
							? 'Please search after `Act as a`'
							: 'Input a persona, e.g. photographer'
					}
					className="flex flex-col w-full py-2 mt-5 md:py-3 md:pl-4 relative  text-slate-50 bg-gray-600 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.10)] border border-hidden placeholder:text-white"
					onChange={changeInput}
				/>
				<button
					onClick={() => setPage(!page)}
					className="flex flex-col !w-28 justify-center item-center !py-2 !pl-[12px] pr-[9px] mt-5 ml-[24px] mr-0 md:py-3 md:pl-4 relative  text-slate-50 bg-gray-600 hover:bg-gray-500 text-xs font-semibold rounded-md shadow-[0_0_15px_rgba(0,0,0,0.10)] border border-hidden">
					{!page ? 'Generate Prompt' : 'Awesome Prompts'}
				</button>
			</div>
			<h5 className="text-sm text-white flex justify-center  items-center text-center drop-shadow-xl py-5 my-1 h-10  font-semibold">
				<p className="mr-2 px-[38px]">
					{!page ? (
						<p>
							Please refer to the following link
							<a
								className="hover:text-red-600 text-red-300 underline underline-offset-4 font-bold"
								href="https://github.com/f/awesome-chatgpt-prompts">
								{' '}
								github.com/f/awesome-chatgpt-prompts{' '}
							</a>
							for prompt writers and more information.
						</p>
					) : (
						<p className="whitespace-normal">
							This data set
							<a
								className="hover:text-red-600 text-red-300 underline underline-offset-4 font-bold"
								href="https://github.com/f/awesome-chatgpt-prompts">
								{' '}
								github.com/f/awesome-chatgpt-prompts{' '}
							</a>
							trained on a BART model developed by
							<a
								className="hover:text-orange-600 text-orange-300 underline underline-offset-4 font-bold"
								href="https://huggingface.co/spaces/merve/chatgpt-prompt-generator-v12">
								{' '}
								huggingface.co/merve{' '}
							</a>
							generates ChatGPT prompts. Click the link for more information.
						</p>
					)}
				</p>
			</h5>
			{!page ? <AwesomePrompt /> : <GeneratePrompt />}
		</div>
	);
};

export default Main;
