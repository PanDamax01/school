import { accessibleTools } from './accessible.min.js'

let spanYear, contactEmail, burgerLines, burgerLine2, burgerNav, nav, body, headlineHeader, header, headerBtnLeft , headerBtnRight, accessibleIcon, asideAccessible, navItem, accessibleLi, staffSchool, carousel, arrowBtns, firstCardWidth, carouselChildrens, cardPerView
let slide = 1, isClick = false, timeNextSlide = 9_000, isDragging = false, startX, startScrollLeft, timeoutId
const motivationText = ['Zmień swoje marzenia w rzeczywistość', 'Twój sukces jest naszą misją', 'Zapraszamy do szkoły']

const main = () => {
	prepareDOMElements()
	// getYear()
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
	if (body.classList.contains('school')){
	staffSchool = body.querySelector('.staff-school')
	carousel = body.querySelector('.staff-school__carousel')
	arrowBtns = body.querySelectorAll('.staff-school__btn')
	firstCardWidth = carousel.querySelector('.staff-school__card').offsetWidth
	carouselChildrens = [...carousel.children]
	cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)
	}
}

const getYear = () => {
	const year = new Date().getFullYear()
	spanYear.textContent = year
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

// ----------- slider

const sliceSlider = () => {
	carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
		carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
	})
	
	carouselChildrens.slice(0, cardPerView).forEach(card =>{
		carousel.insertAdjacentHTML('beforeend', card.outerHTML)
	})
}

const dragStart = e => {
	isDragging = true
	carousel.classList.add('dragging')
	startX = e.pageX
	startScrollLeft = carousel.scrollLeft
}

const dragging = e => {
	if(!isDragging) return
	carousel.scrollLeft = startScrollLeft - (e.pageX - startX)

}

const dragStop = () => {
	isDragging = false
	carousel.classList.remove('dragging')
}

const autoPlay = () => {
	if (window.innerWidth < 800) return
	timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 5000)
}

const infiniteScroll = () => {
	if (carousel.scrollLeft === 0) {
		carousel.classList.add('no-transition')
		carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidt)
		carousel.classList.remove('no-transition')
	}else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
		carousel.classList.add('no-transition')
		carousel.scrollLeft = carousel.offsetWidth
		carousel.classList.remove('no-transition')
	}

	clearTimeout(timeoutId)
	if (!staffSchool.matches(':hover')) autoPlay()
}

const prepareDOMEvents = () => {
	burgerNav.addEventListener('click', changeNav)
	navItem.forEach(li => li.addEventListener('click', changeNav))
	// accessibleIcon.addEventListener('click', changeAsideDisabled)
	// accessibleLi.forEach(li => li.addEventListener('click', accessibleTools))
	
	if (body.classList.contains('main-body')) {
		headerBtnRight.addEventListener('click', changeNumber)
		headerBtnLeft.addEventListener('click', changeNumber)
		setInterval(autoChangeSlide, timeNextSlide)
		body.offsetWidth > 350?(contactEmail.textContent = 'support@sparklewpthemes.com'):null
	} else if (body.classList.contains('school')){
		carousel.addEventListener('mousedown', dragStart)
		carousel.addEventListener('mousemove', dragging)
		document.addEventListener('mouseup', dragStop)
		carousel.addEventListener('scroll', infiniteScroll)
		staffSchool.addEventListener('mouseenter', () => clearTimeout(timeoutId))
		staffSchool.addEventListener('mouseleave', autoPlay)

		arrowBtns.forEach(btn =>{
			btn.addEventListener('click', () => {
				carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth
			})
		})
		sliceSlider()
		autoPlay()
	}
}

document.addEventListener('DOMContentLoaded', main)
