import { accessibleTools } from './accessible.min.js'

let spanYear, contactEmail, burgerLines, burgerLine2, burgerNav, nav, body, headlineHeader, header, headerBtnLeft , headerBtnRight, accessibleIcon, asideAccessible, navItem, accessibleLi
let slide = 1, isClick = false, timeNextSlide = 9_000
const motivationText = ['Zmień swoje marzenia w rzeczywistość', 'Twój sukces jest naszą misją', 'Zapraszamy do szkoły']

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
	accessibleIcon = body.querySelector('.accessible-tools__img')
	asideAccessible = body.querySelector('.accessible-tools')
	accessibleLi = body.querySelectorAll('.accessible-tools__item')
}

const onStart = () => {
	const year = new Date().getFullYear()
	spanYear.textContent = year

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
	asideAccessible.classList.toggle('active')
}

const prepareDOMEvents = () => {
	burgerNav.addEventListener('click', changeNav)
	navItem.forEach(li => li.addEventListener('click', changeNav))
	headerBtnRight.addEventListener('click', changeNumber)
	headerBtnLeft.addEventListener('click', changeNumber)
	accessibleIcon.addEventListener('click', changeAsideDisabled)
	accessibleLi.forEach(li => li.addEventListener('click', accessibleTools))
	

	setInterval(autoChangeSlide, timeNextSlide)
}

document.addEventListener('DOMContentLoaded', main)