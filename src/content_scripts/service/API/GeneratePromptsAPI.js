//Uses the api of this link or site https://huggingface.co/spaces/merve/ChatGPT-prompt-generator
export async function fetchDataGeneratePrompt(generatePrompt) {
	try {
		const response = await fetch(
			'https://merve-chatgpt-prompt-generator.hf.space/run/predict',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					data: [generatePrompt.toString()],
				}),
			},
		);
		const data = await response.json();
		return data.data[0];
	} catch (error) {
		console.error(error);
	}
}
