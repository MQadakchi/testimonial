const contents = document.querySelectorAll(".content");
const images = document.querySelectorAll(".image img");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    contents.forEach((content) => content.classList.remove("active"));
    contents[id].classList.add("active");
    images.forEach((image) => image.classList.remove("active"));
    e.currentTarget.classList.add("active");
  });
});
