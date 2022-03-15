const params = new URLSearchParams(window.location.search);

const productId = params.get("ref");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const imageElement = document.getElementById("imageUrl");
const priceElement = document.getElementById("price");
const categoryElement = document.getElementById("category");

const addMoney = document.getElementById("basic-addon1");
const btnSaveProduct = document.getElementById("btn-save");
const btnReturn = document.getElementById("btn-return");

addMoney.innerHTML = money;

btnReturn.href = './views/detailProduct.html?ref=' + productId;

const getProductPlace = (id) => {
  const url = `${urlBase}/products/${id}.json`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((product) => {
      console.log(product);
      titleElement.value = product.title;
      priceElement.value = product.price;
      descriptionElement.value = product.description;
      imageElement.value = product.imageUrl;
      categoryElement.value = product.category;
    });
};

const getData = () => {
  const titleElement = document.getElementById("title");
  const priceElement = document.getElementById("price");
  const imageElement = document.getElementById("imageUrl");
  const descriptionElement = document.getElementById("description");
  const categoryElement = document.getElementById("category");

  const product = {
    title: titleElement.value,
    price: priceElement.value,
    imageUrl: imageElement.value,
    description: descriptionElement.value,
    category: categoryElement.value
  }
  console.log(product);
  updateProduct(product.title, product.description, product.imageUrl, product.price, product.category, productId);

}


btnSaveProduct.addEventListener("click", getData);

getProductPlace(productId);