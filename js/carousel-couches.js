(function carousel() {
    const slides = [
        `<img width="200" src="img/coach-hanry.webp" alt="coach-courtney-henry">`,
        `<img width="200" src="img/coach-alex-husar.jpg" alt="coach-alex-husar">`,
        `<img width="200" src="img/coach-kathryn-murphy.webp" alt="coach-kathryn-murphy">`,
        `<img width="200" src="img/coach-floyd-miles.webp" alt="coach-floyd-miles">`,
        `<img width="200" src="img/coach-anthony-tolliver.webp" alt="coach-anthony-tolliver">`,
        `<img width="200" src="img/coach-theresa-webb.webp" alt="coach-theresa-webb">`
    ];

    let currentSlideIndex = 0;
    let secordSlideIndex = 1;
    let thirdSlideIndex = 2;
    let slideCount = 3;
    let slideIndexes = [];

    function showCouches() {
        const slideContainer = document.querySelector(".personal-coaching .slide");
        slideContainer.innerHTML = slides[currentSlideIndex] + slides[secordSlideIndex] + slides[thirdSlideIndex];
    }

    function nextSlideNew() {
        currentSlideIndex = currentSlideIndex + 2;
        incurrentSlideIndexdex = Math.min(Math.max(currentSlideIndex, 0), slides.length - 1);
    }

    function nextSlideFourInRow() {
        currentSlideIndex++;
        if (currentSlideIndex === slides.length - 2) {
            secordSlideIndex = currentSlideIndex + 1;
            thirdSlideIndex = 0;
        } else
            if (currentSlideIndex === slides.length - 1) {
                secordSlideIndex = 0;
                thirdSlideIndex = 1;
            }
            else {
                if (currentSlideIndex === slides.length) currentSlideIndex = 0;
                secordSlideIndex = currentSlideIndex + 1;
                thirdSlideIndex = currentSlideIndex + 2;
            }
        showCouches();
    }
    function prevSlideFourInRow() {
        currentSlideIndex--;
        if (currentSlideIndex === - 1) {
            currentSlideIndex = slides.length - 1;
            secordSlideIndex = 0;
            thirdSlideIndex = 1;
        } else

            if (currentSlideIndex === slides.length - 2) {
                currentSlideIndex = slides.length - 2;
                secordSlideIndex = slides.length - 1;
                thirdSlideIndex = 0;
            } else {
                secordSlideIndex = currentSlideIndex + 1;
                thirdSlideIndex = currentSlideIndex + 2;
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