import Textarea from '../Textarea';

const Card = () => {
	return (
		<div className=" w-full flex flex-col my-2 h-auto">
			<span className="flex flex-col items-center justify-start w-auto h-auto ">
				<div className="w-11/12 flex justify-between items-center">
					<div className="animate-pulse rounded-md mt-2 text-white block text-lg bg-[#343541] py-2 px-8 w-8 h-4 font-semibold"></div>
					<button className="animate-pulse p-3 rounded-md mt-2 text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2  dark:hover:text-gray-400 hover:bg-gray-900 bg-[#343541] disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"></button>
				</div>
				<Textarea
					disabled={true}
					className=" animate-pulse w-11/12 min-h-[132px] m-5 md:py-3 md:pl-4 relative border  border-gray-900/60 text-slate-100 bg-gray-800 rounded-md shadow-[0_0_15px_rgba(0,0,0,0.10)] resize-none"
				/>
			</span>
		</div>
	);
};

export default Card;
