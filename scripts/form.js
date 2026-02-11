const products = [
  { id: "laptop", name: "Laptop" },
  { id: "printer", name: "Printer" },
  { id: "tablet", name: "Tablet" },
  { id: "phone", name: "Phone" }
];

const select = document.getElementById("product-list");

if (select) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}

// Update the footer date
const lastModElement = document.getElementById("lastMod");
if (lastModElement) {
    lastModElement.textContent = document.lastModified;
}
