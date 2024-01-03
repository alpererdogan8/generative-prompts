import Modal from './components/Modal';
import { createPortal } from 'react-dom';
import { usePrompts } from './context/Context_Api';
import React, { useEffect } from 'react';
import Loading from './components/Loading';

function App() {
	const { isOpenModal, setIsOpenModal, loading } = usePrompts();
	const main = document.querySelector('main');

	useEffect(() => {
		setIsOpenModal(false);
	}, [window.location.pathname]);

	return (
		<>
			<div
				className="flex w-full justify-between font-sans font-semibold py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0"
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
