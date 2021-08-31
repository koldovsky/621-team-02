function ShowTime() {
    const time = document.querySelector('.clock');
    time.innerText = new Date().toLocaleTimeString();
}

setInterval(ShowTime, 1000);

const currentYear = new Date().getFullYear();
const firstEvent = new Date(`July 14 ${currentYear + 1} 7:30`)

function DayLeft() {
    const dayLeft = document.querySelector('.time-left');
    const currentTime = new Date();
    const diff = firstEvent - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    dayLeft.innerHTML = 'Time to first event: '
    dayLeft.innerHTML += `${d} days`;
    dayLeft.innerHTML += ` and ${h} hours`;
}

document.querySelector('.time-left').onclick = DayLeft;

// carousel store

let currentSlideIdxStore = 0;

const StorePhoto = [
    `<img class = "store-photo" src="img/store-t-shirt.webp" alt="T-shirt">`,
    `<img class = "store-photo" src="img/store-white-t-shirt.webp" alt="White T-shirt">`,
    `<img class = "store-photo" src="img/store-hoodie.webp" alt="Hoodie">`
];

const TextPhoto = [
    `<P class = "text-photo-store">Unisex New All Words Tee (Blue/White)<br><span class="price">$30.00</span></p>`,

    `<P class = "text-photo-store">Unisex New All Words Tee (Blue/White2)<br><span class="price">$30.00</span></p>`,

    `<P class = "text-photo-store">Men's Patriot Pack 2018 (Stars/Stripes)<br><span class="price">$75.00</span></p>`
]

function showCurrentSlide() {
    const slideContainer = document.querySelector('.carousel-store ');
    slideContainer.innerHTML = StorePhoto[currentSlideIdxStore];
    document.querySelector('.store-text').innerHTML = TextPhoto[currentSlideIdxStore];
}

function nextSlide() {
    currentSlideIdxStore++;
    if (currentSlideIdxStore >= StorePhoto.length) currentSlideIdxStore = 0;
    showCurrentSlide();
}

function previousSlide() {
    currentSlideIdxStore--;
    if (currentSlideIdxStore <= 0) currentSlideIdxStore = [StorePhoto.length - 1];
    showCurrentSlide();
}

setInterval(nextSlide, 3000);
showCurrentSlide();

document.querySelector('.next-photo').addEventListener('click', nextSlide);
document.querySelector('.previous-photo').addEventListener('click', previousSlide);
