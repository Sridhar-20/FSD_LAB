
function updateProductInfo(product,discount,inStock){
    const id=product.id;
    const name=product.name;
    return {
       id,
       name,
       discount,
       inStock
    }
}

const product = {
    id: 101,
     name:"Laptop", 
     price: 1000,
      category:"Electronics"
}
console.log(product)
const resobj=updateProductInfo(product,10,true)
console.log(resobj)