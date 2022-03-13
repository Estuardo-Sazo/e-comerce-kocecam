var modalMsg = new bootstrap.Modal(document.getElementById('modal-msg'), {
    keyboard: false
  });

initCar();
getAllProducts();

// Click add product add cart
$(document).on("click", ".add-cart", function (e) {
    let element = $(this)[0];
    let id = $(element).attr("id");
    getProductPlace(id);
    addCountItem();
    modalMsg.show();


});
