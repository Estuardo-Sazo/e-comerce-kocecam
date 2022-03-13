const addMoney=document.getElementById("basic-addon1");
const btnSaveProduct=document.getElementById("btn-save");
addMoney.innerHTML=money;

const getData =()=>{
  const titleElement = document.getElementById("title");
  const priceElement = document.getElementById("price");
  const imageElement = document.getElementById("imageUrl");
  const descriptionElement = document.getElementById("description");
  const categoryElement = document.getElementById("category");

  const product={
      title: titleElement.value,
      price: priceElement.value,
      imageUrl: imageElement.value,
      description: descriptionElement.value,
      category: categoryElement.value
  }
  console.log(product);
  createProduct(product.title, product.description, product.imageUrl, product.price, product.category);
    
}


btnSaveProduct.addEventListener("click", getData);
