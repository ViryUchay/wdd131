/* ===============================
   GLOBAL HELPERS
================================ */
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

/* ===============================
   MOBILE MENU
================================ */
const menuToggle = qs(".menu-toggle");
const navMenu = qs(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

/* ===============================
   ACTIVE NAV LINK
================================ */
qsa(".nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

/* ===============================
   TESTIMONIAL ROTATOR
================================ */
const testimonials = [
  { text: "HelmetCrest saved my day! Fast and reliable repair service.", name: "— David A." },
  { text: "Very professional team. My car was fixed in no time.", name: "— Chinedu O." },
  { text: "Affordable pricing and excellent customer care!", name: "— Fatima S." }
];

let tIndex = 0;
const textEl = qs("#testimonial-text");
const nameEl = qs("#testimonial-name");

function rotateTestimonials() {
  if (!textEl || !nameEl) return;

  const current = testimonials[tIndex];
  textEl.textContent = current.text;
  nameEl.textContent = current.name;

  tIndex = (tIndex + 1) % testimonials.length;
}

setInterval(rotateTestimonials, 4000);

/* ===============================
   SERVICES FILTER
================================ */
const services = [
  { name: "Leak Repair", type: "Home" },
  { name: "Painting", type: "Home" },
  { name: "Laptop Repair", type: "Electronics" },
  { name: "Phone Screen Fix", type: "Electronics" },
  { name: "Battery Replacement", type: "Vehicle" },
  { name: "Engine Diagnostics", type: "Vehicle" }
];

function displayServices(list) {
  const grid = qs("#serviceGrid");
  if (!grid) return;

  grid.innerHTML = list.map(service => `
    <div class="card">
      <h3>${service.name}</h3>
      <p>${service.type} Service</p>
    </div>
  `).join("");
}

displayServices(services);

qsa(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    displayServices(type === "All" ? services : services.filter(s => s.type === type));
  });
});

/* ===============================
   BOOKING FORM + STORAGE
================================ */
const bookingForm = qs("#bookingForm");

if (bookingForm) {
  const confirmation = qs("#confirmation");
  const requests = JSON.parse(localStorage.getItem("requests")) || [];

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = qs("#name").value.trim();
    const email = qs("#email").value.trim();
    const service = qs("#service").value;

    if (name.length < 2) {
      confirmation.textContent = "Please enter a valid name.";
      return;
    }

    const request = {
      name,
      email,
      service,
      date: new Date().toLocaleDateString()
    };

    requests.push(request);
    localStorage.setItem("requests", JSON.stringify(requests));

    confirmation.textContent = `Thank you ${name}! Your ${service} request has been received.`;
    bookingForm.reset();
  });
}

/* ===============================
   REQUEST COUNT
================================ */
const countDisplay = qs("#requestCount");

if (countDisplay) {
  const saved = JSON.parse(localStorage.getItem("requests")) || [];
  countDisplay.textContent = `Total requests submitted: ${saved.length}`;
}

/* ===============================
   VISIT MESSAGE
================================ */
const visitMsg = qs("#visitMessage");

if (visitMsg) {
  const last = localStorage.getItem("lastVisit");

  visitMsg.textContent = last
    ? `Welcome back! Your last visit was ${last}`
    : "Welcome to HelmetCrest!";

  localStorage.setItem("lastVisit", new Date().toLocaleDateString());
}

/* ===============================
   SCROLL REVEAL (PERFORMANCE)
================================ */
const revealSections = qsa(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });

revealSections.forEach(section => observer.observe(section));



/* ===============================
   SCROLL TO TOP
================================ */
const topBtn = qs("#topBtn");

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ===============================
   RANDOM DIY TIPS
================================ */
const tips = [
  "Turn off power before fixing electronics.",
  "Check tire pressure regularly.",
  "Prevent leaks with routine maintenance."
];

const tipBox = qs("#randomTip");

if (tipBox) {
  tipBox.textContent = tips[Math.floor(Math.random() * tips.length)];
}

/* ===============================
   CONTACT FORM
================================ */
const contactForm = qs("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(contactForm));

    const bookings = JSON.parse(localStorage.getItem("helmetBookings")) || [];
    bookings.push(formData);

    localStorage.setItem("helmetBookings", JSON.stringify(bookings));

    alert(`Thank you ${formData.name}, your request has been saved!`);
    contactForm.reset();
  });
}
