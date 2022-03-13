const urlBase='https://jasz-kodecamo-default-rtdb.firebaseio.com';
let mainContent = document.getElementById("main-content");


const money="GTQ";
const createProduct=(title, description, imageUrl,price,category)=>{
    const  url=urlBase+'/products.json';
    const product={
        title,
        description,
        imageUrl,
        price,
        category
    }
    fetch(url,{
        method:"POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        },
    }).
        then((res)=>{
            return res.json();
        }).then((product)=>{
            productId = product.name;
            console.log(product);
            window.location.href = `../`;
        });
};

const cardProduct=(title, description, imageUrl, price, category, productId)=>{
   
    let cardContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardSubtitle = document.createElement("h5");
    let cardText = document.createElement("p");
    let contentButton = document.createElement("div");

    let cardButtonView = document.createElement("a");
    let cardButtonAdd = document.createElement("a");

  
    // Add classes to elements
    cardContainer.classList.add("card", "custom-card", "mt--2","shadow","rounded");
    cardImage.classList.add("card-img-top", "custom-card-image", "rounded", "mx-auto" ,"d-block");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title","title-card");
    cardSubtitle.classList.add("card-subtitle","subtitle-card");
    contentButton.classList.add("d-grid", "gap-2","col-md-8","mx-auto");


    cardButtonView.classList.add("rounded-pill", "btn", "btn-primary",  "btn-sm"); 
    cardButtonAdd.classList.add("rounded-pill", "btn", "btn-warning",  "btn-sm"); 

    // Add values to the elements
    cardImage.src = imageUrl;
    cardTitle.innerText = title;
    cardSubtitle.innerText = `${money} ${price}`;


    cardText.innerText = `Categoria: ${category}`;
    cardButtonView.innerText = "Ver";
    cardButtonView.href = `/details.html?ref=${productId}`;
    cardButtonAdd.innerText = "Agregar";
    cardButtonAdd.href = `/cart.html?ref=${productId}`;
  
    // Build structure
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody);
   

  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(contentButton);

    contentButton.appendChild(cardButtonView);
    contentButton.appendChild(cardButtonAdd);


    return cardContainer;
};

const getAllProducts = () => {
    const url = `${urlBase}/products.json`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((products) => {
          console.log(products);
        for (const key in products) {
          const product = products[key];
  
          const card = cardProduct(
            product.title,
            product.description,
            product.imageUrl,
            product.price,
            product.category,
            key
          );
  
          mainContent.appendChild(card);
        }
      });
  };

