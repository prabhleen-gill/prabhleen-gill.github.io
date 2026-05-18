function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

const viewer = document.getElementById("image-viewer");
const viewerImg = document.getElementById("viewer-img");
const closeViewer = document.querySelector(".close-viewer");

document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.getElementById("image-viewer");
  const viewerImg = document.getElementById("viewer-img");
  const closeViewer = document.querySelector(".close-viewer");

  const zoomableImages = document.querySelectorAll(".zoomable");

  zoomableImages.forEach((img) => {
    img.addEventListener("click", () => {
      viewer.style.display = "flex";
      viewerImg.src = img.src;
      viewerImg.alt = img.alt;
    });
  });

  closeViewer.addEventListener("click", () => {
    viewer.style.display = "none";
  });

  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
      viewer.style.display = "none";
    }
  });
});