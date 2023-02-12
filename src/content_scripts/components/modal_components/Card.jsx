import React, { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { usePrompts } from '../../context/Context_Api';
import Textarea from './Textarea';
import { useEffect } from 'react';

const Card = ({ act = '...', prompt, maxRows = 7 }) => {
	const [cardData, setCardData] = useState({});
	useEffect(() => {
		setCardData({ act, prompt });
	}, [act, prompt]);

	const { handleSubmit } = usePrompts();
	const MarkdownComponent = {
		code: (props) => (
			<code className="px-1 py-1 rounded-md bg-black/40 text-white/75" {...props} />
		),
	};

	return (
		<div className=" w-full flex flex-col h-auto">
			<span className="flex flex-col items-center justify-start w-auto h-auto ">
				<div className="w-11/12 flex mx-5 justify-between items-center">
					<ReactMarkdown
						components={MarkdownComponent}
						className=" mt-2 text-white text-lg  font-semibold">
						{`Act as a ${cardData.act}`}
					</ReactMarkdown>
					<button
						className="p-2 rounded-md mt-2 text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2  dark:hover:text-gray-400 hover:bg-gray-900 bg-[#343541] disabled:bg-[#787986] disabled:hover:bg-[#787986]"
						disabled={
							typeof cardData?.prompt === 'undefined' || cardData.prompt === ''
								? true
								: false
						}
						onClick={(e) => handleSubmit(e, cardData.prompt)}>
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
				</div>
				<Textarea
					maxRows={maxRows}
					tabIndex={-1}
					className="w-11/12 min-h-[132px] m-5 md:py-3 md:pl-4 relative border  border-gray-900/60 text-slate-100 bg-gray-800 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.10)] resize-none"
					value={cardData.prompt}
					onChange={(e) => setCardData({ ...cardData, prompt: e.target.value })}
				/>
			</span>
		</div>
	);
};

export default Card;
