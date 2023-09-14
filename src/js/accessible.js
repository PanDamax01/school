const fontSize = ['--fontsize--sixteen','--fontsize--eighteen','--fontsize--twenty','--fontsize--twenty-two','--fontsize--twenty-fourth', '--fontsize--twenty-six','--fontsize--twenty-eight','--fontsize--thirty','--fontsize--thirty-fourth','--fontsize--thirty-six','--fontsize--fifty']

const body = document.body
const rootStyles = document.documentElement
const allSection = body.querySelectorAll('.section')
const allLink = body.querySelectorAll('a')
const allSpan = body.querySelectorAll('span')
const headerTopBtn = body.querySelectorAll('.headerTop__btn')
const headerText = body.querySelector('.header__text')
const disabledItem = body.querySelectorAll('.accessible-tools__item')
const headlineHeader = body.querySelector('.header__headline')
let currentfontSize = 20

export const accessibleTools = e => {
	const element = e.target.closest('li')
	let attribute = element.getAttribute('data-tool')
	
	switch (attribute) {
		case 'increase-text':
			currentfontSize++
			fontSizeUp()
			break;
		case 'decrease-text':
			currentfontSize--
			fontSizeDown()
			break;
		case 'grayscale':
			element.classList.toggle('work')
			changeGrayscale(element)
			break;
			case 'high-contrast':
			element.classList.toggle('work')
			changeHighContrast(element)
			
			break;
		case 'newgative-contrast':
			element.classList.toggle('work')
			changeNegativeContrast(element)
			break;
		case 'light-background':
			element.classList.toggle('work')
			changeLightBackground(element)
			break;
		case 'links-underline':
			element.classList.toggle('work')
			changeLinksUnderline(element)
			break;
		case 'readable-font':
			element.classList.toggle('work')
			changeReadableFont(element)
			break;
		case 'reset':
			changeReset()
			break;
	
		default:
			break;
	}
	checkStyles(disabledItem)
}

const checkStyles = element => {
	element.forEach( li => {
		if (li.classList.contains('work')) {
			let attribute = li.getAttribute('data-tool')
			
			switch (attribute) {
				case 'grayscale':
					changeGrayscale(li)
					break;
				case 'high-contrast':
					changeHighContrast(li)
					break;
				case 'newgative-contrast':
					changeNegativeContrast(li)
					break;
				case 'light-background':
					changeLightBackground(li)
					break;
				case 'links-underline':
					changeLinksUnderline(li)
					break;
				case 'readable-font':
					changeReadableFont(li)
					break;
			
				default:
					break;
			}
		}
})}

const resetStyles = () => {
	body.style.setProperty('--blue-color', '#014b8d')
	body.style.setProperty('--white-color', '#f2f4f6')
	body.style.setProperty('--darkgray-color', '#222')
	body.style.setProperty('--black-color', '#000')
	allLink.forEach(el => el.style.color = '')
	headerTopBtn.forEach(el => el.style.color = '')
	allSpan.forEach(el => el.style.color = '')
	headlineHeader.style.color = ''
	body.querySelectorAll('h4').forEach(el => el.style.color = '')
	body.querySelectorAll('h3').forEach(el => el.style.color = '')
	body.querySelectorAll('h2').forEach(el => el.style.color = '')
	body.style.setProperty('--green-color', '#10ae4f')
	headerText.style.color = ''
}

const setStyles = () => {
    body.style.setProperty('--blue-color', '#000')
	body.style.setProperty('--white-color', '#000')
    allSpan.forEach(el => el.style.color = '#fff')
	headlineHeader.style.color = '#fff'
	body.querySelectorAll('h4').forEach(el => el.style.color = '#fff')
	body.querySelectorAll('h3').forEach(el => el.style.color = '#fff')
	body.querySelectorAll('h2').forEach(el => el.style.color = '#fff')
}

const fontSizeUp = () =>{
	for (let i = 0; i < fontSize.length; i++) {
		const currentSize = parseFloat(getComputedStyle(rootStyles).getPropertyValue(fontSize[i]))
    	const newSize = (currentSize + 0.1).toFixed(1)

		if (currentfontSize <= 24) {
			rootStyles.style.setProperty(fontSize[i], newSize + 'rem')
		}
	}
}

const fontSizeDown = () =>{
	for (let i = 0; i < fontSize.length; i++) {
		const currentSize = parseFloat(getComputedStyle(rootStyles).getPropertyValue(fontSize[i]))
    	const newSize = (currentSize - 0.1).toFixed(1)
		
		if (currentfontSize >= 19) {
			rootStyles.style.setProperty(fontSize[i], newSize + 'rem');
		}	
	}
}

const changeGrayscale = element => {
	if (element.classList.contains('work')) {
		allSection.forEach(el => el.style.filter = 'grayscale(80%)')
		body.style.setProperty('--blue-color', '#33424f')
	} else {
		allSection.forEach(el => el.style.filter = '')
		body.style.setProperty('--blue-color', '#014b8d')
	}
}

const changeHighContrast = element => {
	if (element.classList.contains('work')) {
		body.style.setProperty('--green-color', '#fff')
		allLink.forEach(el => el.style.color = '#2a70d3')
		headerTopBtn.forEach(el => el.style.color = '#2a70d3')
		setStyles()
	} else {
		resetStyles()
	}
}

const changeNegativeContrast = element =>{
	if (element.classList.contains('work')) {
		allLink.forEach(el => el.style.color = '#fff')
		headerTopBtn.forEach(el => el.style.color = '#fff')
		setStyles()
	} else {
		resetStyles()
	}
}

const changeLightBackground = element => {
	if (element.classList.contains('work')) {
		body.style.setProperty('--blue-color', '#fff')
		body.style.setProperty('--darkgray-color', '#fff')
		body.style.setProperty('--black-color', '#fff')
		allLink.forEach(el => el.style.color = '#000')
		headerTopBtn.forEach(el => el.style.color = '#000')
		allSpan.forEach(el => el.style.color = '#000')
		body.querySelectorAll('h4').forEach(el => el.style.color = '#000')
		body.querySelectorAll('h3').forEach(el => el.style.color = '#000')
		headerText.style.color = '#fff'
	} else{
		resetStyles()
	}
}

const changeLinksUnderline = element => {
	if (element.classList.contains('work')) {
		allLink.forEach( link => link.style.textDecoration = 'underline')
	}else{
		allLink.forEach( link => link.style.textDecoration = '')
	}
}

const changeReadableFont = element => {
	if (element.classList.contains('work')) {
		allSpan.forEach(el => el.style.letterSpacing = '1px')
	}else{
		allSpan.forEach(el => el.style.letterSpacing = '')
	}
}

const changeReset = () => {
	disabledItem.forEach(li => li.classList.remove('work'))
	resetStyles()
	allSpan.forEach(el => el.style.letterSpacing = '')
	allLink.forEach( link => link.style.textDecoration = '')
	allSection.forEach(el => el.style.filter = '')
}