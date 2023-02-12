import { usePrompts } from '../../../context/Context_Api';
import Tag from './Tag';

const Bookmark = () => {
	const { storedValue } = usePrompts();
	console.log(storedValue);
	return (
		<div className="w-3/12 h-[85.5%] mt-[10px] rounded-br-xl flex flex-col mb-[20px]">
			<div className="text-lg font-semibold underline underline-offset-2 ">Bookmarks</div>
			<div className="w-full  overflow-y-scroll  h-[100%]">
				{typeof storedValue !== 'undefined'
					? storedValue?.map((item) => (
							<Tag key={item?._id} id={item?._id} tagData={item} />
					  ))
					: none}
			</div>
		</div>
	);
};

export default Bookmark;
