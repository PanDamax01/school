const changeNav = () => {
	;[document.querySelector('.line1'), document.querySelector('.line3')].forEach(el => el.classList.toggle('draw-line'))
	document.querySelector('.line2').classList.toggle('submitted-line')

	document.querySelector('.nav').classList.toggle('nav-active')
	document.body.classList.toggle('hidden')
}

if (document.body.classList.contains('main-body')) {
	document.querySelector('.headerTop__btn-nav').addEventListener('click', changeNav)
}

/////////////////////////////////////////
let slide = 1

setInterval(() => {
	changeNextSlide()
}, 8000);

const changeNextSlide = () => {
	slide === 3 ? (slide = 1) : slide++
	setImg(slide)
}

const changePreSlide = () => {
	slide === 1 ? (slide = 3) : slide--
	setImg(slide)
}

const changeHeaderText = (slide) => {
	const headlineHeader = document.querySelector('.header__headline')

	switch (slide) {
		case 1:
			headlineHeader.textContent = 'Zmień swoje marzenia w rzeczywistość'
			break;
		case 2:
			headlineHeader.textContent = 'Twój sukces jest naszą misją'
			break;
		case 3:
			headlineHeader.textContent = 'Zapraszamy do szkoły'
			break;
	}
}

const setImg = slide => {
	document.querySelector('.header').style.backgroundImage = `url(dist/img/header${slide}-big.jpg)`
	changeHeaderText(slide)
}

document.querySelector('.header__btn').addEventListener('click', changePreSlide)
document.querySelector('.header__btn--right').addEventListener('click', changeNextSlide)
