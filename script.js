const toggle = document.getElementById("bio-toggle");
const bio = document.getElementById("bio");
const roles = document.querySelectorAll(".roles li");
const video = document.getElementById("bg-video");

// Toggle bio on click
toggle.addEventListener("click", () => {
  bio.classList.toggle("hidden");
});

// Placeholder: Assign background videos
const videoSources = {
  model: "assets/videos/model.mp4",
  author: "assets/videos/author.mp4",
  host: "assets/videos/host.mp4",
  foundation: "assets/videos/foundation.mp4",
  clinic: "assets/videos/clinic.mp4",
};

roles.forEach((role) => {
  const key = role.dataset.role;

  role.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 768 && videoSources[key]) {
      video.src = videoSources[key];
      video.style.opacity = 1;
    }
  });

  role.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 768) {
      video.style.opacity = 0;
      video.removeAttribute("src");
    }
  });

  // Mobile tap workaround
  role.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      if (video.src.includes(videoSources[key])) {
        window.location.href = role.querySelector("a").href;
      } else {
        video.src = videoSources[key];
        video.style.opacity = 1;
      }
    }
  });
});
