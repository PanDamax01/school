let slide = 1
const now = new Date()

document.body.offsetWidth > 350
	? (document.querySelector('.contact__text--email').textContent = 'support@sparklewpthemes.com')
	: null
document.querySelector('.footer__year').textContent = now.getFullYear()

const changeNav = () => {
	;[document.querySelector('.line1'), document.querySelector('.line3')].forEach(el => el.classList.toggle('draw-line'))
	document.querySelector('.line2').classList.toggle('submitted-line')

	document.querySelector('.nav').classList.toggle('nav-active')
	document.body.classList.toggle('hidden')
}

const changeNextSlide = () => {
	slide === 3 ? (slide = 1) : slide++
	setImg(slide)
}

const changePreSlide = () => {
	slide === 1 ? (slide = 3) : slide--
	setImg(slide)
}

const changeHeaderText = slide => {
	const headlineHeader = document.querySelector('.header__headline')

	switch (slide) {
		case 1:
			headlineHeader.textContent = 'Zmień swoje marzenia w rzeczywistość'
			break
		case 2:
			headlineHeader.textContent = 'Twój sukces jest naszą misją'
			break
		case 3:
			headlineHeader.textContent = 'Zapraszamy do szkoły'
			break
	}
}

const setImg = slide => {
	document.querySelector('.header').style.backgroundImage = `url(dist/img/header${slide}-big.jpg)`
	changeHeaderText(slide)
}

setInterval(() => {
	changeNextSlide()
}, 8000)

document.querySelector('.header__btn').addEventListener('click', changePreSlide)
document.querySelector('.header__btn--right').addEventListener('click', changeNextSlide)
document.querySelector('.headerTop__btn-nav').addEventListener('click', changeNav)
