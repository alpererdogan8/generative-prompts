import React from 'react';
import Input from '../components/modal_components/Input';
import { usePrompts } from '../context/Context_Api';
import AwesomePrompt from './AwesomePrompt';

const Main = () => {
	const { setSearch } = usePrompts();

	const changeInput = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="w-full h-full bg-token-sidebar-surface-primary  rounded-xl">
			<div className="w-full  flex justify-between items-center h-16 pb-2 px-5">
				<Input
					type="text"
					tabIndex="0"
					placeholder={'Please search after `Act as a`'}
					className="flex flex-col w-full py-2 mt-5 md:py-3 md:pl-4 relative transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary rounded-md border border-hidden text-token-text-primary placeholder:text-token-text-primary "
					onChange={changeInput}
				/>
			</div>
			<h5 className="text-sm flex justify-center  items-center text-center  py-5 my-1 h-10  font-semibold">
				<p className="mr-2 px-[38px]">
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
				</p>
			</h5>
			<AwesomePrompt />
		</div>
	);
};

export default Main;
