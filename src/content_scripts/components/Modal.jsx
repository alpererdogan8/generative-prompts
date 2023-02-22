import Main from '../pages/Main';

const Modal = () => {
	return (
		<div
			className=" flex flex-col drop-shadow-2xl justify-center items-center absolute z-[990] 
			bg-[#ffffff86] dark:bg-[#00000054] left-0 top-0 bottom-0 right-0 ">
			<div className="w-[95%] h-[90%] rounded-xl bg-[#ffffff86] dark:bg-[#00000054]">
				<Main />
			</div>
		</div>
	);
};

export default Modal;
