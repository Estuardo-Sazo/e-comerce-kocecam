const urlBase='https://jasz-kodecamo-default-rtdb.firebaseio.com';

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
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        },
    }).
        then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log("Datos de respuesta: ", data);
        });
}
