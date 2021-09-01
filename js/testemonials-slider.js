let slidesToView = 3,
    singleSlideWidth = 350,
    carouselWrapper = document.getElementsByClassName('testimonials-block'),
    carouselContainer = document.querySelector('.testemonials__carousel-tracker'),
    carouselItems = document.querySelectorAll('.testemonials_slide'),
    containerWidth = carouselItems.length * singleSlideWidth,
    wrapperWidth = slidesToView * singleSlideWidth,
    dotsContainer = document.getElementById('carousel__nav'),
    currentKey = 0;

carouselContainer.style.width = containerWidth + 'px';
carouselWrapper[0].style.height = carouselItems[0].clientHeight + 'px';
carouselWrapper[0].style.width = wrapperWidth + 'px'

let leftButton = document.querySelector('.testimonials-block .left'),
    rightButton = document.querySelector('.testimonials-block .right');

leftButton.addEventListener('click', function () {
    slide(true)
})
rightButton.addEventListener('click', function () {
    slide(false)
})

if (parseInt(carouselContainer.style.left) === 0) {
    leftButton.style.display = 'none'
}

carouselItems.forEach(function (item, key) {
    let dotButton = document.createElement('button');
    dotButton.className = 'carousel__indicator'
    dotButton.setAttribute('data-key', key);
    
    dotsContainer.appendChild(dotButton)

    dotButton.addEventListener('click', function(e){ scrollTo(e) })
})

function scrollTo(e) {
    let key = e.target.getAttribute('data-key');

    if (key > currentKey) {
        for (let i = 0; i < key; i++){
            slide()
        }
    } else {
        for (let i = currentKey; i > 0; i--){
            slide(true)
        }
    }

    currentKey = key;
}

function slide(revers) {
    let currentLeft = parseInt(carouselContainer.style.left);
    
    rightButton.style.display = 'block'
    leftButton.style.display = 'block'

    if (revers) {
        if (currentLeft <= -1 * singleSlideWidth) {
            currentLeft += singleSlideWidth;
        }

        if (currentLeft === 0) {
            leftButton.style.display = 'none'
        } else {
            leftButton.style.display = 'block'
        }
    } else {
        if (currentLeft > -1 * (carouselItems.length - slidesToView) * singleSlideWidth) {
            currentLeft -= singleSlideWidth;
        } else {
            rightButton.style.display = 'none'
        }
    }

    carouselContainer.style.left = currentLeft + 'px';
}