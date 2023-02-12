import { usePrompts } from '../../../context/Context_Api';
import Card from '../Card';
import SkeletonCard from '../generate_prompts_components/SkeletonCard';
import Bookmark from './Bookmark';
import Examples from './Examples';

const GenerateView = () => {
	const { loading, generatePrompt } = usePrompts();

	return (
		<div className="w-full flex h-full">
			<div className="w-9/12 h-full flex  flex-col  justify-start items-center">
				{loading ? (
					<SkeletonCard />
				) : (
					<Card maxRows={1} act={generatePrompt?.act} prompt={generatePrompt?.prompt} />
				)}
				<Examples />
			</div>
			<Bookmark />
		</div>
	);
};

export default GenerateView;
