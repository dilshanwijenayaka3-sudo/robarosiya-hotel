const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const header = document.querySelector(".site-header");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// ==============================
// WHATSAPP BOOKING FORM
// ==============================

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const type = document.getElementById("type").value;
  const date = document.getElementById("date").value || "Not specified";
  const message =
    document.getElementById("message").value.trim() ||
    "No additional message";

  // Hotel WhatsApp number
  // Sri Lanka country code 94
  const whatsappNumber = "94775530935";

  const whatsappMessage = `🏨 ROBAROSIYA HOTEL BOOKING

👤 Name: ${name}
📞 Phone: ${phone}
🛎 Inquiry Type: ${type}
📅 Preferred Date: ${date}

💬 Message:
${message}

I would like more information.`;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
});


// ==============================
// ACTIVE NAVIGATION ON SCROLL
// ==============================

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav .nav-link")];

const setActiveNav = () => {
  let current = "home";
  const scrollPos = window.scrollY + 160;

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
};

window.addEventListener("scroll", setActiveNav);
setActiveNav();


// ==============================
// HERO PARALLAX EFFECT
// ==============================

const hero = document.querySelector(".hero");

if (hero && window.matchMedia("(min-width: 1051px)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x =
      (e.clientX / window.innerWidth - 0.5) * 4;

    const y =
      (e.clientY / window.innerHeight - 0.5) * 4;

    hero.style.backgroundPosition =
      `calc(50% + ${x}px) calc(50% + ${y}px)`;
  });
}