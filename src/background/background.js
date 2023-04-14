let manifest_version = chrome.runtime.getManifest().manifest_version;

const openChatGpt = () => {
	chrome.tabs.create({
		url: 'https://chat.openai.com/',
	});
};

if (manifest_version == 2) {
	chrome.browserAction.onClicked.addListener(openChatGpt);
} else {
	chrome.action.onClicked.addListener(openChatGpt);
}
