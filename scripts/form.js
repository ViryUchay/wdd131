const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Printer" },
  { id: 3, name: "Tablet" },
  { id: 4, name: "Phone" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

document.getElementById("lastMod").textContent = document.lastModified;