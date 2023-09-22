const camouflage = () => {
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

export default camouflage