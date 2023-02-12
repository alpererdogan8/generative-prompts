import Tag from './Tag';

const Examples = () => {
	const exampleData = [
		{
			_id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
			act: 'developer',
			prompt:
				'I want you to act as a developer. I will provide you with tools that will allow you to develop software for developing mobile applications. My first request is "I need help developing a mobile app for Android."',
		},
		{
			_id: 'd6c7dfef-b947-4c83-a89e-b5e76e59390b',
			act: 'photographer',
			prompt:
				'I want you to act as a photographer. I will provide you with images and you will create captions for them. My first request is "I need help creating a photobook.',
		},
	];

	return (
		<div className="font-semibold  w-11/12 flex-col flex mt-7 ">
			<div className="flex w-36 px-3 border-solid border-b-2 border-spacing-1 border-white  ">
				<h4 className="text-lg p-2 flex justify-between items-center font-semibold  rounded-xl  ">
					<svg
						stroke="currentColor"
						fill="none"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="h-4 w-4 mr-2"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M12 20h9"></path>
						<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
					</svg>

					<span>Examples</span>
				</h4>
			</div>{' '}
			<div className="flex gap-3">
				<Tag isExample="true" tagData={exampleData[0]} />
				<Tag isExample="true" tagData={exampleData[1]} />
			</div>
		</div>
	);
};

export default Examples;
