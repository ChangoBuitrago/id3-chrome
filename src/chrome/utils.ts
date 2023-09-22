export interface TwitterBio {
	name?: string,
	w3n?: string,
	username?: string,
	avatar?: string
} 

export const getTwitterBio = (callback: (twiterBio: TwitterBio | null) => void): void => {
	const queryInfo = { active: true, lastFocusedWindow: true }

	chrome.tabs.query(queryInfo, (tabs) => {
			const activeTab = tabs[0]
			const url:string = activeTab.url as string

			const isTwitter = /^https:\/\/twitter\.com\//i.test(url)
			if (!isTwitter) {
				callback(null)
				return
			}

			const tabId:number = tabs[0].id as number
			chrome.scripting.executeScript({
					target: { tabId },
					func: () => {
							const nameElement = document.querySelector('[data-testid="UserName"]')
							const textContent = nameElement?.textContent?.trim() || ''
						
							const nameMatch = textContent.match(/^([^(@\n]+)/)
							const w3nMatch = textContent.match(/\(w3n:([^)]+)\)/)
							const usernameMatch = textContent.match(/@([^ ]+)/)
							
							const name = nameMatch ? nameMatch[1].trim() : undefined
							const w3n = w3nMatch ? w3nMatch[1] : undefined
							const username = usernameMatch ? usernameMatch[1] : undefined

							const avatarElement = document.querySelector(`[data-testid="UserAvatar-Container-${username}"] img`) as HTMLImageElement
							const avatar = avatarElement?.src || undefined

							return { name, w3n, username, avatar }
					}
			}, (results) => {
					const twiterBio = results[0].result as TwitterBio
					callback(twiterBio)
			})
	})
}