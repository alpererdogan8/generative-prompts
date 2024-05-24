import React from 'react';

const TopScroll = ({ scroll }) => {
	const handleScroll = () => {
		return scroll();
	};

	return (
		<button
			onClick={handleScroll}
			className=" absolute right-7 bottom-5 p-2 m-1 z-[9999] bg-[#000] cursor-pointer hover:bg-[#424242] rounded-full">
			<svg
				stroke="currentColor"
				fill="none"
				stroke-width="2"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				className="h-4 w-4 m-1 origin-center rotate-180"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg">
				<line x1="12" y1="5" x2="12" y2="19"></line>
				<polyline points="19 12 12 19 5 12"></polyline>
			</svg>
		</button>
	);
};

export default TopScroll;
