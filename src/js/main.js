let spanYear, contactEmail, burgerLines, burgerLine2, burgerNav, nav, body, headlineHeader, header, headerBtnLeft , headerBtnRight, disabledIcon, asideDisabled, navItem, disabledItem, rootStyles, allSection, allImg, allLink ,allSpan, headerTopBtn, headerText

let slide = 1, isClick = false, timeNextSlide = 9_000, currentfontSize = 20
const motivationText = ['Zmień swoje marzenia w rzeczywistość', 'Twój sukces jest naszą misją', 'Zapraszamy do szkoły']

const fontSize = ['--fontsize--sixteen','--fontsize--eighteen','--fontsize--twenty','--fontsize--twenty-two','--fontsize--twenty-fourth', '--fontsize--twenty-six','--fontsize--twenty-eight','--fontsize--thirty','--fontsize--thirty-fourth','--fontsize--thirty-six','--fontsize--fifty']


const main = () => {
	prepareDOMElements()
	onStart()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	body = document.body
  	spanYear = body.querySelector('.footer__year')
  	contactEmail = body.querySelector('.contact__text--email')
  	burgerLines = [body.querySelector('.line1'), body.querySelector('.line3')]
  	burgerLine2 = body.querySelector('.line2')
  	burgerNav = body.querySelector('.headerTop__btn-nav')
  	nav = body.querySelector('.nav')
	navItem = body.querySelectorAll('.nav__item')
  	headlineHeader = body.querySelector('.header__headline')
  	header = body.querySelector('.header')
  	headerBtnLeft = body.querySelector('.header__btn')
  	headerBtnRight = body.querySelector('.header__btn--right')
	disabledIcon = body.querySelector('.accessible-tools__img')
	asideDisabled = body.querySelector('.accessible-tools')
	disabledItem = body.querySelectorAll('.accessible-tools__item')
	rootStyles = document.documentElement
	allSection = body.querySelectorAll('.section')
	allImg = body.querySelectorAll('img')
	allLink = body.querySelectorAll('a')
	allSpan = body.querySelectorAll('span')
	headerTopBtn = body.querySelectorAll('.headerTop__btn')
	headerText = body.querySelector('.header__text')
	
}

//zamienic na osobne funkcje
const onStart = () => {
	const year = new Date().getFullYear()
	spanYear.textContent = year

	//true false
	body.offsetWidth > 350?(contactEmail.textContent = 'support@sparklewpthemes.com'):null
}

const changeNav = () => {
	if (body.offsetWidth <= 767) {
		burgerLines.forEach(el => el.classList.toggle('draw-line'))
		burgerLine2.classList.toggle('submitted-line')
	
		nav.classList.toggle('active')
		body.classList.toggle('hidden')
	}
}

const changeNumber = e => {
	slide = e.target === headerBtnRight ? (slide % 3) + 1 : (slide - 2 + 3) % 3 + 1
  	setImg(slide)
	changeHeaderText(slide)
	isClick = true
}

const setImg = slide => {
	const size = body.offsetWidth < 576 ? 'small': 'big'	
	header.style.backgroundImage = `url(dist/img/header${slide}-${size}.jpg)`
}

const changeHeaderText = slide => {
	headlineHeader.textContent = motivationText[slide -1];
}

const autoChangeSlide = () => {
	if (!isClick) {
		slide === 3 ? slide = 1 : slide ++
		setImg(slide)
		changeHeaderText(slide)
	}else {
		isClick = false
	}
}

const changeAsideDisabled = () => {
	asideDisabled.classList.toggle('active')
}


/// napisac nową funkcje do fontSize, przeniesienie do osobnego pliku, dopisac do funkcji reset rest do fontsize
const changeValueSpecial = e => {
	const element = e.target.closest('li')
	let attribute = element.getAttribute('data-tool')
	console.log(attribute); // usunąc
	
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
	// console.log(element)

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

		body.style.setProperty('--blue-color', '#000')
		body.style.setProperty('--white-color', '#000')
		body.style.setProperty('--green-color', '#fff')
		allLink.forEach(el => el.style.color = '#2a70d3')
		headerTopBtn.forEach(el => el.style.color = '#2a70d3')
		allSpan.forEach(el => el.style.color = '#fff')
		headlineHeader.style.color = '#fff'
		body.querySelectorAll('h4').forEach(el => el.style.color = '#fff')
		body.querySelectorAll('h3').forEach(el => el.style.color = '#fff')
		body.querySelectorAll('h2').forEach(el => el.style.color = '#fff')
		
		
	} else {
		resetStyles()
	}
}

const changeNegativeContrast = element =>{
	if (element.classList.contains('work')) {

		body.style.setProperty('--blue-color', '#000')
		body.style.setProperty('--white-color', '#000')
		allSpan.forEach(el => el.style.color = '#fff')
		allLink.forEach(el => el.style.color = '#fff')
		headerTopBtn.forEach(el => el.style.color = '#fff')
		headlineHeader.style.color = '#fff'
		body.querySelectorAll('h4').forEach(el => el.style.color = '#fff')
		body.querySelectorAll('h3').forEach(el => el.style.color = '#fff')
		body.querySelectorAll('h2').forEach(el => el.style.color = '#fff')
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

const prepareDOMEvents = () => {
	burgerNav.addEventListener('click', changeNav)
	navItem.forEach(li => li.addEventListener('click', changeNav))
	headerBtnRight.addEventListener('click', changeNumber)
	headerBtnLeft.addEventListener('click', changeNumber)
	disabledIcon.addEventListener('click', changeAsideDisabled)
	disabledItem.forEach(li => li.addEventListener('click', changeValueSpecial))
	

	setInterval(autoChangeSlide, timeNextSlide)
}

document.addEventListener('DOMContentLoaded', main)