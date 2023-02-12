import { usePrompts } from '../../../context/Context_Api';

const Tag = ({ id, tagData, isExample = false }) => {
	const { setGeneratePrompt, handleDeleteGeneratedPrompt } = usePrompts();
	return (
		<div className="px-3 flex w-min-[90px] w-auto items-center justify-start py-1 mt-3 bg-slate-400/25 mb-2 border-solid border-slate-300 border-2 bg-gray-800 rounded-xl ">
			{isExample ? null : (
				<div className="pr-1 mr-1 flex justify-center items-center">
					<button type="button" onClick={() => handleDeleteGeneratedPrompt(id)}>
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-4 w-4"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg">
							<polyline points="3 6 5 6 21 6"></polyline>
							<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
							<line x1="10" y1="11" x2="10" y2="17"></line>
							<line x1="14" y1="11" x2="14" y2="17"></line>
						</svg>
					</button>
				</div>
			)}
			<button
				onClick={() => setGeneratePrompt(tagData)}
				className="text-base font-medium lg:font-semibold ">
				{tagData?.act}
			</button>
		</div>
	);
};

export default Tag;
