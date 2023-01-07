const images = [
  "7(pc).jpg", "IMG_9451.jpg", "IMG_3824_Original.JPG", "KakaoTalk_Photo_2021-02-26-01-47-09_m.jpg","Autumn.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "images";
document.body.appendChild(bgImage);

