// Write your JavaScript here...
//set const for images
const img1 = document.querySelector("#carouselImg1");
const img2 = document.querySelector("#carouselImg2");
const img3 = document.querySelector("#carouselImg3");

let activePhoto = img1;

imgArray = [img1, img2, img3];
//set const for buttons
const button1 = document.querySelector("#carouselNav1");
const button2 = document.querySelector("#carouselNav2");
const button3 = document.querySelector("#carouselNav3");

let carouselNav = [button1, button2, button3];
//function to change active photo
let changePhoto = function () {
  let nextImgIndex = imgArray.indexOf(activePhoto) + 1;
  if (nextImgIndex > 2) {
    nextImgIndex = 0;
  }
  activePhoto.classList.remove("active-photo");
  activePhoto = imgArray[nextImgIndex];
  activePhoto.classList.add("active-photo");
  //change nav button fill
  if (activePhoto == img1) {
    button1.style.backgroundColor = "blue";
    button2.style.backgroundColor = "white";
    button3.style.backgroundColor = "white";
  } else if (activePhoto == img2) {
    button1.style.backgroundColor = "white";
    button2.style.backgroundColor = "blue";
    button3.style.backgroundColor = "white";
  } else {
    button1.style.backgroundColor = "white";
    button2.style.backgroundColor = "white";
    button3.style.backgroundColor = "blue";
  }
};

//set interval
setInterval(function () {
  changePhoto();
}, 3000);
//add event listeners
button1.addEventListener("click", function () {
  activePhoto = img3;
  changePhoto();
});
button2.addEventListener("click", function () {
  activePhoto = img1;
  changePhoto();
});
button3.addEventListener("click", function () {
  activePhoto = img2;
  changePhoto();
});
//# sourceMappingURL=script.min.js.map
