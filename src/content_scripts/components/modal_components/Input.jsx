const Input = (props) => {
	return (
		<div className="w-full flex items-center">
			<input tabIndex={-1} {...props} />
		</div>
	);
};

export default Input;
