'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// Function to dynamically set YouTube video URLs
function setVideoUrl(videoUrl, type) {
  const videoId = videoUrl.split('v=')[1];
  const iframe = type === 'live' ? document.getElementById("liveVideo") : document.getElementById("highlightVideo");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
}

// Example usage (replace with actual video links)
setVideoUrl("https://www.youtube.com/watch?v=vaFUmeNxl7A", 'live');  // Replace LIVE_MATCH_VIDEO_ID with actual live match video ID
setVideoUrl("https://www.youtube.com/watch?v=HIGHLIGHT_VIDEO_ID", 'highlight');  // Replace HIGHLIGHT_VIDEO_ID with actual highlight video ID


