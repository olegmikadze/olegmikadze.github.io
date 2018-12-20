function openBlock(evt, blockName) {
    var i,services__tabcontent, services__tab__tablinks;
    services__tabcontent = document.getElementsByClassName("services__tabcontent");
    for (i = 0; i < services__tabcontent.length; i++) {
        services__tabcontent[i].style.display = "none";
    }
    services__tab__tablinks = document.getElementsByClassName("services__tablinks");
    for (i = 0; i < services__tab__tablinks.length; i++) {
        services__tab__tablinks[i].className = services__tab__tablinks[i].className.replace("active", "");
    }
    document.getElementById(blockName).style.display = "flex";
    evt.currentTarget.className += " active";
}



let feedBacks = document.getElementsByClassName('feedback__element');
let imagesSlider = document.getElementsByClassName('feedback__slider');
let buttonsSlider = document.getElementsByClassName('feedback__button');

let sliderIndex = 2;
showFeedback(sliderIndex);

for (let i = 0; i < imagesSlider.length; i++) {
    imagesSlider[i].onclick = function () {
        slideImage(i + 1);
    }
}

buttonsSlider[0].onclick = function () {
    slideButton(-1)
};

buttonsSlider[1].onclick = function () {
    slideButton(1)
};

function slideButton(index) {
    showFeedback(sliderIndex += index);
}

function slideImage(index) {
    showFeedback(sliderIndex = index);
}

function showFeedback(index) {

    if (index >= feedBacks.length) {
        buttonsSlider[1].style.visibility = 'hidden';
        buttonsSlider[0].style.visibility = 'visible';
    }

    if (index <= 1) {
        buttonsSlider[0].style.visibility = 'hidden';
        buttonsSlider[1].style.visibility = 'visible';
    }

    if (index > 1 && index < feedBacks.length) {
        buttonsSlider[1].style.visibility = 'visible';
        buttonsSlider[0].style.visibility = 'visible';
    }

    for (let i = 0; i < feedBacks.length; i++) {
        feedBacks[i].style.display = 'none';
        feedBacks[i].style.transform = 'scale(0, 0)';
        feedBacks[i].style.opacity = '0';
    }

    for (let i = 0; i < imagesSlider.length; i++) {
        imagesSlider[i].className = imagesSlider[i].className.replace(' feedback__slider--active', '');
    }

    feedBacks[sliderIndex - 1].style.display = 'block';

    setTimeout(function () {
        feedBacks[sliderIndex - 1].style.transform = 'none';
        feedBacks[sliderIndex - 1].style.opacity = '1';
    }, 40);

    imagesSlider[sliderIndex - 1].className += ' feedback__slider--active';
}



jQuery(function ($) {
    $("#grid").masonry({
        itemSelector: '.grid-item',
        columnWidth: 150,
        stamp: '.title',
        horizontalOrder: true,
        fitWidth: true,
        //percentPosition: true,
        gutter: 0,
        //originLeft:false,
        //originTop:false
        //resize
    });
});