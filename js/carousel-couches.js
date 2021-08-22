(function carousel() {
    const slides = [
        `<img width="200" src="img/coach-hanry.webp" alt="coach-courtney-henry">`,
        `<img width="200" src="img/coach-alex-husar.jpg" alt="coach-alex-husar">`,
        `<img width="200" src="img/coach-kathryn-murphy.webp" alt="coach-kathryn-murphy">`,
        `<img width="200" src="img/coach-floyd-miles.webp" alt="coach-floyd-miles">`,
        `<img width="200" src="img/coach-anthony-tolliver.webp" alt="coach-anthony-tolliver">`,
        `<img width="200" src="img/coach-theresa-webb.webp" alt="coach-theresa-webb">`
    ];

    let cardSlideIndex = 0;
    let secordSlideIndex = 1;
    let thirdSlideIndex = 2;
    let fourthSlideIndex = 3;

    function showCouches() {
        const slideContainer = document.querySelector(".personal-coaching .slide");
        slideContainer.innerHTML = slides[cardSlideIndex] + slides[secordSlideIndex] + slides[thirdSlideIndex] + slides[fourthSlideIndex];
    }

    function nextSlideFourInRow() {
        cardSlideIndex++;
        if (cardSlideIndex === slides.length) {
            cardSlideIndex = 0;
            secordSlideIndex = cardSlideIndex + 1;
            thirdSlideIndex = cardSlideIndex + 2;
            fourthSlideIndex = cardSlideIndex + 3;
        } else
        if (cardSlideIndex === slides.length - 3) {
            secordSlideIndex = cardSlideIndex + 1;
            thirdSlideIndex = cardSlideIndex + 2;
            fourthSlideIndex = 0;
        } else
        if (cardSlideIndex === slides.length - 2) {
            secordSlideIndex = cardSlideIndex + 1;
            thirdSlideIndex = 0;
            fourthSlideIndex = 1;
        } else
        if(cardSlideIndex === slides.length - 1) {
            secordSlideIndex = 0;
            thirdSlideIndex = 1;
            fourthSlideIndex = 2;
        }
         else {
            secordSlideIndex = cardSlideIndex + 1;
            thirdSlideIndex = cardSlideIndex + 2;
            fourthSlideIndex = cardSlideIndex + 3;
        }
        showCouches();
    }
    function prevSlideFourInRow() {
        cardSlideIndex--;
        if (cardSlideIndex === - 1) {
            cardSlideIndex = slides.length - 1;
            secordSlideIndex = 0;
            thirdSlideIndex = 1;
            fourthSlideIndex = 2;
        } else

        if (cardSlideIndex === slides.length - 2) {
            cardSlideIndex = slides.length - 2;
            secordSlideIndex = slides.length -1 ;
            thirdSlideIndex = 0;
            fourthSlideIndex = 1;
        } else
        if (cardSlideIndex === slides.length -3) {
            secordSlideIndex = slides.length - 2;
            thirdSlideIndex = slides.length - 1;
            fourthSlideIndex = 0;
        } else {
            secordSlideIndex = cardSlideIndex - 1;
            thirdSlideIndex = cardSlideIndex - 2;
            fourthSlideIndex = cardSlideIndex - 3;
        }
       
        showCouches();
    }
    

    //setInterval(nextSlide, 4000);
    showCouches();

    document.querySelector('.next-coach-slide')
        .addEventListener('click', nextSlideFourInRow);


    document.querySelector('.prev-coach-slide')
        .addEventListener('click', prevSlideFourInRow);
})()