const toggle = document.getElementById("bio-toggle");
const bio = document.getElementById("bio");

toggle.addEventListener("click", () => {
  bio.classList.toggle("hidden");
});

const roleImageMap = {
  model: {
    src: "assets/images/model8.png",
    alt: "Fashion model",
  },
  author: {
    src: "assets/images/book8.png",
    alt: "Published author",
  },
  host: {
    src: "assets/images/podcast1.jpg",
    alt: "Podcast",
  },
  foundation: {
    src: "assets/images/fundacja8.png",
    alt: "Foundation",
  },
  clinic: {
    src: "assets/images/poradnia8.png",
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

// Preload all images
Object.values(roleImageMap).forEach((entry) => {
  const img = new Image();
  img.src = entry.src;
});

document.querySelectorAll(".roles li a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    document.body.classList.add("link-hovering");
  });
  link.addEventListener("mouseleave", () => {
    document.body.classList.remove("link-hovering");
  });
});
