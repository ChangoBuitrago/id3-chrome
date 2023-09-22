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

							if (username === 'buitregool') {
								// Replace the window title
								document.title = 'Micha Roon (w3n:micha) (@drgorbx) / X'

								// Replace url
								window.history.replaceState(null, 'null', 'https://twitter.com/drgorbx')
							
								let element
								// Replace total posts
								element = document.querySelector('[data-testid="primaryColumn"] h2[dir="ltr"]')
								if (element) {
									const nextElement = element.nextElementSibling
									if (nextElement) {
										nextElement.innerHTML = nextElement.innerHTML.replace('3', '1,564')
									}
								} else {
									console.error('Element not found')
								}
								
								// Replace handler
								element = document.querySelector('[data-testid="UserName"]')
								if (element) {
									element.innerHTML = element.innerHTML.replace('@buitregool', '@drgorbx')
								} else {
									console.error('Element not found')
								}
							
								// Replace all post handler
								const elements = document.querySelectorAll('[data-testid="tweet"]');
								elements.forEach(element => {
									if (element) {
										element.innerHTML = element.innerHTML.replace('@buitregool', '@drgorbx');
									} else {
										console.error('Element not found');
									}
								})

								// Replace joined
								element = document.querySelector('[data-testid="UserProfileHeader_Items"]')
								if (element) {
									element.innerHTML = element.innerHTML.replace('Joined March 2023', 'Joined February 2011')
								} else {
									console.error('Element not found')
								}
							
								// Replace following
								element = document.querySelector('a[href="/buitregool/following"] span span')
								if (element) {
									element.innerHTML = element.innerHTML.replace('2', '189')
								} else {
									console.error('Element not found')
								}
							
								// Replace followers
								element = document.querySelector('a[href="/buitregool/verified_followers"] span span')
								if (element) {
									element.innerHTML = element.innerHTML.replace('0', '1933')
								} else {
									console.error('Element not found')
								}
							}

							return { name, w3n, username, avatar }
					}
			}, (results) => {
					const twiterBio = results[0].result as TwitterBio
					callback(twiterBio)
			})
	})
}