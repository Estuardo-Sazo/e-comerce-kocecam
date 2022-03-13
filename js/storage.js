var cart = localStorage.getItem('Cart');
var shoppingCart = [];
let countItem = document.getElementById("cart-count");

const saveCartStorage = (cart) => {
    localStorage.setItem('Cart', JSON.stringify(cart));
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

const removeItemAmount = (id)=>{
    shoppingCart.forEach(function(sub, index, object) {
        if (sub.id === id) {
            if (object[index].amount ==1) {
                deleteItemCart(id);
                return;
            }else{
                object[index].amount = object[index].amount - 1;
                object[index].subtotal = object[index].price * object[index].amount;
            }
            
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

const initCar=()=>{
    console.table(shoppingCart);
    addCountItem();

}



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
                addCountItem();

            }
            console.table(shoppingCart);

        });
};



