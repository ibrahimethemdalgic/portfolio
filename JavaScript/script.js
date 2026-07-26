const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

menuButton.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });

    sidebar.classList.remove("open");
  });
});

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const animatedSections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

animatedSections.forEach(function (section) {
  observer.observe(section);
});