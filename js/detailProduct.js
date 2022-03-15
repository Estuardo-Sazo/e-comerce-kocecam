const params = new URLSearchParams(window.location.search);

const productId = params.get("ref");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const imageElement = document.getElementById("image");
const priceElement = document.getElementById("price");
const categoryElement = document.getElementById("category");

const btnEdit = document.getElementById("btn-edit");
const btnDelete = document.getElementById("btn-delete");


btnEdit.href = './editProduct.html?ref=' + productId;

const deleteProduct = (productId) => {
    const url = `${urlBase}/products/${productId}.json`;
    if (confirm('Esta seguro de Eliminar?') == true) {

        fetch(url, {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
                window.location.href = "../";
            } else {
                console.error(res);
            }
        });
    }

};

btnDelete.addEventListener("click", () => {
    deleteProduct(productId);
});
getProduct(productId);