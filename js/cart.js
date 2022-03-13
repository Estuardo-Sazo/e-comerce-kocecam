console.log(shoppingCart);
let listCart = document.getElementById("list-cart");
let totalLabel = document.getElementById("total");


const viewcar=()=>{
    let tmp='';
    let total=0;
    shoppingCart.forEach(item=>{
        total+=item.subtotal;
        tmp+=`
        <tr productId="${item.id}">
            <th scope="row">${item.product}</th>
            <td>${money} ${item.price}</td>
            <td>${item.amount}</td>
            <th scope="row">${money} ${item.subtotal.toFixed(2)}</th>
            <td>
                <a productId="${item.id}" href="#" class="rounded btn btn-light btn-sm remove"><i class="bi bi-dash-circle"></i></a>

                <a productId="${item.id}" href="#" class="rounded btn btn-light btn-sm add"><i class="bi bi-plus-circle"></i></a>
                <a href="/views/detailProduct.html?ref=${item.id}" class="rounded btn btn-light btn-sm"><i class="bi bi-eye"></i> Ver</a>
                <a productId="${item.id}" href="#" class="rounded btn btn-danger btn-sm delete"><i class="bi bi-trash"></i></a>

            </td>
        </tr>
        `;
    });

    totalLabel.innerHTML=` ${money} ${total.toFixed(2)}`;
    listCart.innerHTML=tmp;
}

viewcar();


// Click add product add cart
$(document).on("click", ".delete", function (e) {
    let element = $(this)[0];
    let id = $(element).attr("productId");
    deleteItemCart(id);
    viewcar();

});


$(document).on("click", ".remove", function (e) {
    let element = $(this)[0];
    let id = $(element).attr("productId");
    removeItemAmount(id);
    viewcar();

});

$(document).on("click", ".add", function (e) {
    let element = $(this)[0];
    let id = $(element).attr("productId");
    addItemAmount(id);
    viewcar();

});