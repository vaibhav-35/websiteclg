
//setTimeout(function(){document.querySelector("#wrap").style.display='none';},1500);

window.addEventListener('load',function(e){document.querySelector("#wrap").style.display='none';});

var slideshowCounter = 0;
var slides = ["./filess/img1.jpg","./filess/img2.jpg","./filess/img3.jpg","./filess/img4.jpg","./filess/img5.jpg"]
const slide = document.querySelector('#slideshowimg');
const leftbtn = document.querySelector('#left');
leftbtn.addEventListener('click',leftShift);
function leftShift()
{
    slideshowCounter = Math.abs(slideshowCounter-1)%slides.length;
    slide.src=slides[slideshowCounter];
}

const rightbtn = document.querySelector('#right');
rightbtn.addEventListener('click',rightShift);
function rightShift()
{
    slideshowCounter = (slideshowCounter+1)%slides.length;
    slide.src=slides[slideshowCounter];
    
}

setTimeout(slideshow,3000);
function slideshow()
{
    slideshowCounter = (slideshowCounter+1)%slides.length;
    slide.src=slides[slideshowCounter];
    setTimeout(slideshow,5000);
}

