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
				className="group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-semibold juice:gap-2.5 juice:font-normal hover:bg-token-sidebar-surface-secondary cursor-pointer"
				onClick={() => setIsOpenModal(!isOpenModal)}>
				<div className="flex gap-2">
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
