import { usePrompts } from '../../context/Context_Api';

const Input = (props) => {
	const { page, handleGeneratePrompt, generatePrompt, setGeneratePrompt } = usePrompts();

	const handleKeyDown = (e) => {
		if (e.keyCode === 13 && e.ctrlKey) {
			return handleGeneratePrompt();
		}
	};

	return (
		<div className="w-full flex items-center">
			{page ? (
				<>
					<input
						onKeyDown={handleKeyDown}
						{...props}
						tabIndex={-1}
						onChange={(e) =>
							setGeneratePrompt({ ...generatePrompt, act: e.target.value })
						}
					/>
					<span className="flex w-36 absolute right-44  items-center bottom-[8px] ">
						<div className="bg-gray-600 px-1 mr-2 mt-2 py-1 flex items-center rounded-md">
							<kbd class="px-2 py-1.5 text-xs font-semibold text-gray-300  rounded-lg bg-stone-800 border-gray-500">
								Ctrl
							</kbd>
							<span className="mx-1"> + </span>

							<kbd class="px-2 py-1.5 text-xs font-semibold text-gray-300  rounded-lg bg-stone-800 border-gray-500">
								Enter
							</kbd>
						</div>
						<button
							onClick={handleGeneratePrompt}
							disabled={generatePrompt === '' ? true : false}
							className="p-2 rounded-md mt-2 text-gray-500 bottom-1.5  dark:hover:text-gray-400 hover:bg-gray-900 bg-[#343541]">
							<svg
								stroke="currentColor"
								fill="currentColor"
								stroke-width="0"
								viewBox="0 0 20 20"
								class="h-4 w-4 rotate-90"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
							</svg>
						</button>
					</span>
				</>
			) : (
				<input tabIndex={-1} {...props} />
			)}
		</div>
	);
};

export default Input;
