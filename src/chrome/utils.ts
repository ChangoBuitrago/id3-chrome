export interface ActiveProfile {
	name?: string,
	w3n?: string,
	username?: string,
	avatar?: string
}

export const isValidProfile = (callback: (isTwitter: boolean) => void): void => {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
			const activeTab = tabs[0]
			const url = activeTab?.url || ''

			const isTwitter = /^https:\/\/twitter\.com\//i.test(url)
			callback(isTwitter)
	})
}

export const getActiveProfile = (callback: (activeProfile: ActiveProfile) => void): void => {
	const queryInfo = { active: true, lastFocusedWindow: true }

	if (!chrome.tabs) {
			callback({})
			return
	}

	chrome.tabs.query(queryInfo, (tabs) => {
			const tabId = tabs[0]?.id

			if (!tabId) {
					callback({})
					return
			}

			chrome.scripting.executeScript({
					target: { tabId },
					func: () => {
							const nameElement = document.querySelector('[data-testid="UserName"]')
							const textContent = nameElement?.textContent?.trim() || ''

							const nameMatch = textContent.match(/^([^(\n]+)/);
							const w3nMatch = textContent.match(/\(w3n:([^)]+)\)/);
							const usernameMatch = textContent.match(/@([^ ]+)/);
							
							const name = nameMatch ? nameMatch[1].trim() : undefined;
							const w3n = w3nMatch ? w3nMatch[1] : undefined;
							const username = usernameMatch ? usernameMatch[1] : undefined;

							const avatarElement = document.querySelector(`[data-testid="UserAvatar-Container-${username}"] img`) as HTMLImageElement
							const avatar = avatarElement?.src || undefined

							return { name, w3n, username, avatar }
					}
			}, (results) => {
					const activeProfile = results[0].result as ActiveProfile
					callback(activeProfile || {})
			})
	})
}