const images = [
  "images/1.jpeg",
  "images/2.jpeg",
  "images/3.jpeg",
  "images/4.jpeg"
];

let currentIndex = 0;
const largeImage = document.getElementById("large-image");
const thumbnails = document.querySelectorAll(".thumbnail");

function showImage(index) {
  currentIndex = index;
  largeImage.src = images[index];
  updateActiveThumbnail();
}

function updateActiveThumbnail() {
  thumbnails.forEach((thumbnail, idx) => {
    thumbnail.classList.toggle("active", idx === currentIndex);
  });
}

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  showImage(currentIndex);
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  showImage(currentIndex);
});

// Initialize the gallery with the first image
showImage(currentIndex);
