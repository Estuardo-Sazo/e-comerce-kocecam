var cart = localStorage.getItem('Cart');
var shoppingCart = [];
let countItem = document.getElementById("cart-count");

const saveCartStorage = (cart) => {
    localStorage.setItem('Cart', JSON.stringify(cart));
    addCountItem();
}

const addItemCart = (productId, title, price, amount = 1) => {
    
            const item = {
                id: productId,
                product: title,
                price: parseFloat(price).toFixed(2),
                amount,
                subtotal: parseFloat(price) * amount
            };
            shoppingCart.push(item);
            saveCartStorage(shoppingCart);
        
   
}

const addCountItem=()=>{
        countItem.innerHTML= shoppingCart.length;
}
const deleteItemCart=(id) => {
    shoppingCart.forEach(function(sub, index, object) {
        if (sub.id === id) {
            object.splice(index, 1);    
        }
    });

    saveCartStorage(shoppingCart);
}


const addItemAmount = (id)=>{
    shoppingCart.forEach(function(sub, index, object) {
        if (sub.id === id) {
            object[index].amount = object[index].amount + 1;
            object[index].subtotal = object[index].price * object[index].amount;
        }
    });

    saveCartStorage(shoppingCart);
}


if (!cart) {
    cart = shoppingCart;
    saveCartStorage(cart);
} else {
    shoppingCart = JSON.parse(cart);
}
console.table(shoppingCart);
addCountItem();



const getProductPlace = (id) => {
    const url = `${urlBase}/products/${id}.json`;

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((product) => {
            console.log(product);

            var repeat=false;

            shoppingCart.forEach(function(sub, index, object) {
                if (sub.id === id) {
                        addItemAmount(id);
                        repeat=true;
                }
            });

            if(!repeat) {
            addItemCart(id, product.title, product.price);
                
            }
            console.table(shoppingCart);

        });
};


// Click add product add cart
$(document).on("click", ".add-cart", function (e) {
    let element = $(this)[0];
    let id = $(element).attr("id");
    getProductPlace(id);

});

