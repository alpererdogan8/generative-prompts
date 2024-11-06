import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Loading from './components/Loading';
import Modal from './components/Modal';
import { usePrompts } from './context/Context_Api';

function App() {
	const { isOpenModal, setIsOpenModal, loading } = usePrompts();
	const main = document.querySelector('main');

	useEffect(() => {
		setIsOpenModal(false);
	}, [window.location.pathname]);

	return (
		<>
			<div
				className="group grow flex overflow-hidden text-ellipsis text-sm whitespace-nowrap h-10 items-center gap-2 rounded-lg text-token-text-primary bg-token-sidebar-surface-primary px-3 font-normal juice:gap-2.5 juice:font-normal hover:bg-token-sidebar-surface-secondary cursor-pointer"
				onClick={() => setIsOpenModal(!isOpenModal)}>
				<div className="flex gap-2.5">
					<span>🚀</span>
					<span>Generative Prompts</span>
				</div>
				<div>{!loading ? '' : <Loading />}</div>
			</div>
			{isOpenModal && createPortal(<Modal onClose={() => setIsOpenModal(false)} />, main)}
		</>
	);
}

export default App;
