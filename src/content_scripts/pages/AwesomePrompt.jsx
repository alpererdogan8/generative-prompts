import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import NotFoundPrompt from '../components/modal_components/awesome_prompts_components/NotFoundPrompt';
import { usePrompts } from '../context/Context_Api';
import Card from '../components/modal_components/Card';
import TopScroll from '../components/modal_components/awesome_prompts_components/TopScroll';
import { createRef } from 'react';

const AwesomePrompt = () => {
	const { promptsMemo } = usePrompts();
	const listRef = createRef();

	const CardOptimized = ({ index, style }) => (
		<span style={style}>
			<Card act={promptsMemo[index].act} prompt={promptsMemo[index].prompt} />
		</span>
	);

	return (
		<div className="w-full  rounded-b-xl bg-[#474a58] h-[84.5%]">
			<TopScroll scroll={() => listRef.current.scrollToItem(0)} />
			{promptsMemo.length !== 0 ? (
				<AutoSizer>
					{({ height, width }) => {
						return (
							<List
								ref={listRef}
								height={height}
								itemCount={promptsMemo.length}
								itemSize={250}
								width={width}>
								{CardOptimized}
							</List>
						);
					}}
				</AutoSizer>
			) : (
				<NotFoundPrompt />
			)}
		</div>
	);
};

export default AwesomePrompt;
