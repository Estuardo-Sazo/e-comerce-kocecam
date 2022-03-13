const params = new URLSearchParams(window.location.search);

const productId = params.get("ref");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const imageElement = document.getElementById("image");
const priceElement = document.getElementById("price");
const categoryElement = document.getElementById("category");


getProduct(productId);