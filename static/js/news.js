// ============= adaptive ================
let horVideos = document.querySelectorAll('.hor_vid');
let verVideos = document.querySelectorAll('.ver_vid');
adaptive(window.innerWidth);
function adaptive(width) {
    if (width > 1920) {

    }
    if (width <= 1920) {

    }
    if (width <= 1280) {

    }
    if (width <= 1024) {
        horVideos.forEach(el => {
            el.width = 600;
            el.height = 350;
            // el.setAttribute('width', '600');
            // el.setAttribute('height', '350');
        })
        verVideos.forEach(el => {
            // el.setAttribute('width', '300');
            // el.setAttribute('height', '550');
            el.width = 300;
            el.height = 550;
        })
    }
    if (width <= 768) {
        horVideos.forEach(el => {
            // el.setAttribute('width', '400');
            // el.setAttribute('height', '250');
            el.width = 400;
            el.height = 250;
        })
        verVideos.forEach(el => {
            // el.setAttribute('width', '200');
            // el.setAttribute('height', '350');
            el.width = 200;
            el.height = 350;
        })
    }
    if (width <= 425) {
        horVideos.forEach(el => {
            // el.setAttribute('width', '280');
            // el.setAttribute('height', '180');
            el.width = 280;
            el.height = 180;
        })
        verVideos.forEach(el => {
            // el.setAttribute('width', '140');
            // el.setAttribute('height', '250');
            el.width = 140;
            el.height = 250;
        })
    }
    if (width <= 320) {
        horVideos.forEach(el => {
            // el.setAttribute('width', '250');
            // el.setAttribute('height', '150');
            el.width = 250;
            el.height = 150;
        })
        verVideos.forEach(el => {
            // el.setAttribute('width', '125');
            // el.setAttribute('height', '200');
            el.width = 125;
            el.height = 200;
        })
    }
};
adaptive(window.innerWidth);
