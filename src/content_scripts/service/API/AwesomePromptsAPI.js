//Uses this repo and contributors' data for more information https://github.com/f/awesome-chatgpt-prompts
import Papa from 'papaparse';
export async function getAwesomePrompts() {
	try {
		const rawData = await fetch(
			'https://raw.githubusercontent.com/f/awesome-chatgpt-prompts/main/prompts.csv',
		);
		const data = await rawData.text();
		const jsonList = [];

		await Papa.parse(data, {
			header: true,
			complete: (results) =>
				jsonList.push(results.data.slice(0, results.data.length - 1)),
		});
		return jsonList[0];
	} catch (error) {
		console.error(error);
	}
}
