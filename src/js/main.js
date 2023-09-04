document.querySelector('.headerTop__btn-nav').addEventListener('click', ()=>{
    //zamienic funkce na zmienne do css jako klasa
    document.querySelector('.line1').style.strokeDasharray = '100, 200'
    document.querySelector('.line1').style.strokeDashoffset = -121;

    document.querySelector('.line3').style.strokeDasharray = '100, 200'
    document.querySelector('.line3').style.strokeDashoffset = -121;

    document.querySelector('.line2').style.strokeDashoffset = 57;
})