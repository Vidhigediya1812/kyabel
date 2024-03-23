// header menubar
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const mainMenus = document.querySelector('.main-menus');
        menuToggle.addEventListener('click', function () {
            mainMenus.classList.toggle('open');
        });
        const closeIcon = document.querySelectorAll('.close-icon');
        closeIcon.forEach(icon => {
            icon.addEventListener('click', function () {
                mainMenus.classList.remove('open');
            });
        });
    });

// ----------------------------detail page------------------
let zoomed = false;

function toggleZoom() {
    const modal = document.getElementById('myModal');
    const modalContent = modal.querySelector('.modal-content');
    const zoomIcon = document.querySelector('.zoom-icon');

    if (!zoomed) {
        enterFullscreen(modal);
        modalContent.style.width = '85%';
        modalContent.style.height = '80vh';
        zoomIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 32 32" width="512"><g id="Layer_15" data-name="Layer 15"><path d="m21.41 12h3.59v2h-5.59-1.41v-1.37-5.63h2v3.59l8.29-8.3 1.42 1.42zm-7.41 7.37v-1.37h-1.37-5.63v2h3.59l-8.3 8.29 1.42 1.42 8.29-8.3v3.59h2v-5.59z"/></g></svg>';
    } else {
        exitFullscreen();
        modalContent.style.width = '';
        modalContent.style.height = '';
        zoomIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512"><g><path d="m13.777 17.223c-.256 0-.512.098-.707.293l-8.07 8.071v-4.657c0-.553-.447-1-1-1s-1 .447-1 1v7.07c0 .553.447 1 1 1h7.07c.553 0 1-.447 1-1s-.447-1-1-1h-4.655l8.069-8.07c.391-.391.391-1.023 0-1.414-.195-.196-.451-.293-.707-.293z" /><path d="m28.111 3.111h-7.07c-.553 0-1 .447-1 1s.447 1 1 1h4.656l-8.182 8.182c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l8.182-8.182v4.656c0 .553.447 1 1 1s1-.447 1-1v-7.07c0-.552-.447-1-1-1z" /></g></svg>';
    }

    zoomed = !zoomed;
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('myModal');
    const modalContent = modal.querySelector('.modal-content');

    if (isFullscreen()) {
        exitFullscreen();
    }

    modal.style.display = "none";
    modalContent.style.width = '';
    modalContent.style.height = '';
}

function isFullscreen() {
    return (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
    );
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

document.addEventListener('DOMContentLoaded', function () {
    var documentUrl = document.location.href.replace(/#.*$/, '')
    var linkEls = document.getElementsByTagName('A')
    for (var linkIndex = 0; linkIndex < linkEls.length; linkIndex++) {
        var linkEl = linkEls[linkIndex]
        if (!linkEl.getAttribute('href').match(/^#/)) {
            continue;
        }
        linkEl.setAttribute('href', documentUrl + linkEl.getAttribute('href'))
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});


function closeModal() {
    const modal = document.getElementById('myModal');
    const modalContent = modal.querySelector('.modal-content');
    const zoomIcon = document.querySelector('.zoom-icon');

    if (isFullscreen()) {
        exitFullscreen();
    }

    modal.style.display = 'none';
    modalContent.style.width = '';
    modalContent.style.height = '';

    // Reset the zoom icon to its initial state
    zoomIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512"><g><path d="m13.777 17.223c-.256 0-.512.098-.707.293l-8.07 8.071v-4.657c0-.553-.447-1-1-1s-1 .447-1 1v7.07c0 .553.447 1 1 1h7.07c.553 0 1-.447 1-1s-.447-1-1-1h-4.655l8.069-8.07c.391-.391.391-1.023 0-1.414-.195-.196-.451-.293-.707-.293z" /><path d="m28.111 3.111h-7.07c-.553 0-1 .447-1 1s.447 1 1 1h4.656l-8.182 8.182c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l8.182-8.182v4.656c0 .553.447 1 1 1s1-.447 1-1v-7.07c0-.552-.447-1-1-1z" /></g></svg>';

    zoomed = false;
}
