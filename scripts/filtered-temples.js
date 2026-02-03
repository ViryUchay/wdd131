// ... (temples array remains the same) ...

// ---------------------------
// Card Rendering
// ---------------------------
const container = document.querySelector("#cards");

function displayTemples(list) {
  // Guard clause in case container isn't found
  if (!container) return; 
  
  container.innerHTML = "";

  list.forEach(temple => {
    const card = document.createElement("section");

    // Use semantic HTML and template literals
    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;

    container.appendChild(card);
  });
}

// ---------------------------
// Filters Logic
// ---------------------------
// Improved year parsing: Extract the first 4 digits
const getYear = t => parseInt(t.dedicated.substring(0, 4));

// Helper function to add event listeners safely
const addFilterEvent = (id, filterFn) => {
  const element = document.querySelector(id);
  if (element) {
    element.addEventListener("click", () => displayTemples(filterFn()));
  }
};

// Apply Filters
addFilterEvent("#home", () => temples);
addFilterEvent("#old", () => temples.filter(t => getYear(t) < 1900));
addFilterEvent("#new", () => temples.filter(t => getYear(t) > 2000));
addFilterEvent("#large", () => temples.filter(t => t.area > 90000));
addFilterEvent("#small", () => temples.filter(t => t.area < 10000));

// ---------------------------
// Footer info
// ---------------------------
const yearEl = document.querySelector("#year");
const modifiedEl = document.querySelector("#modified");

if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modifiedEl) modifiedEl.textContent = document.lastModified;

// Initial load
displayTemples(temples);
