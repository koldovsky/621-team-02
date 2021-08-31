(function prepareThumbs() {
    const bucket = document.querySelector('.small-thumbs');
    const smallThumbNails = document.querySelectorAll('.small-thumbs>img');
    const largeImg = document.getElementById('large-image');


    largeImg.src = smallThumbNails[0].src;
    // setLarge(largeImg.src.split("/")[1]);

    function setLarge(src) {
        largeImg.src = src;
    }

    for (let i = 0; i < smallThumbNails.length; i++) {
        this.thumbImg = smallThumbNails[i];
        this.thumbImg.addEventListener("mouseover", function() {
            let imgSrc = this.src;
            setLarge(imgSrc);
        });
    }

    // prepareThumbs();
})();