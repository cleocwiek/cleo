const toggle = document.getElementById("bio-toggle");
const bio = document.getElementById("bio");

toggle.addEventListener("click", () => {
  bio.classList.toggle("hidden");
});

const roleImageMap = {
  model: {
    src: "assets/images/model1.png",
    alt: "Fashion model",
  },
  author: {
    src: "assets/images/book1.jpg",
    alt: "Published author",
  },
  host: {
    src: "assets/images/podcast2.jpg",
    alt: "Podcast",
  },
  foundation: {
    src: "assets/images/foundation.png",
    alt: "Foundation",
  },
  clinic: {
    src: "assets/images/poradnia.jpg",
    alt: "Poradnia",
  },
};

const hoverImageContainer = document.getElementById("hover-image");
const hoverImage = document.getElementById("hover-image-img");

document.querySelectorAll(".roles li").forEach((item) => {
  const role = item.dataset.role;

  item.addEventListener("mouseenter", () => {
    const data = roleImageMap[role];
    if (!data) return; // 💥 Prevents crash on "contact"

    hoverImage.src = data.src;
    hoverImage.alt = data.alt;
    hoverImageContainer.classList.add("visible");
    hoverImageContainer.classList.remove("hidden");
  });

  item.addEventListener("mouseleave", () => {
    hoverImageContainer.classList.remove("visible");
    hoverImageContainer.classList.add("hidden");
    hoverImage.src = "";
    hoverImage.alt = "";
  });
});
