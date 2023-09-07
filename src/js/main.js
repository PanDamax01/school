const changeNav = () => {
	;[document.querySelector('.line1'), document.querySelector('.line3')].forEach(
		(el) => el.classList.toggle('draw-line')
	)
	document.querySelector('.line2').classList.toggle('submitted-line')

	document.querySelector('.nav').classList.toggle('nav-active')
}

if (document.body.classList.contains('main-body')) {
	document
		.querySelector('.headerTop__btn-nav')
		.addEventListener('click', changeNav)
}

/////////////////////////////////////////

// let slideNumber = 1
// const dodaj = () => {
// 	slideNumber++

//     if (slideNumber === 4) {
//         slideNumber = 1
//     }

// 	document.querySelector(
// 		'.header'
// 	).style.backgroundImage = `url(dist/img/header${slideNumber}-big.jpg)`
// }

// const odejmij = () => {
//     slideNumber--

//     if (slideNumber === 0) {
//         slideNumber = 3
//     }

// 	document.querySelector(
// 		'.header'
// 	).style.backgroundImage = `url(dist/img/header${slideNumber}-big.jpg)`
// }


// document.querySelector('.header__btn').addEventListener('click', odejmij)
// document.querySelector('.header__btn--right').addEventListener('click', dodaj)

let slide = 1

const changeNextSlide = () => {
    slide === 3 ? slide = 1 : slide++
    setImg(slide)
}

const changePreSlide = () => {
    slide === 1 ? slide = 3 : slide--
    setImg(slide)
}

const setImg = slide => {
    document.querySelector(
        		'.header'
        	).style.backgroundImage = `url(dist/img/header${slide}-big.jpg)`
}

document.querySelector('.header__btn').addEventListener('click', changePreSlide)
document.querySelector('.header__btn--right').addEventListener('click', changeNextSlide)