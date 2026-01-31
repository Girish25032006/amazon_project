 export const cart = [];

 export function push_in_array(productName){
  let matching_product;
   cart.forEach((cartItem)=>{
    if(productName === cartItem.productName){
      matching_product = cartItem;
   }
   });
    if(matching_product){
     matching_product.quantity +=1;
    }
    else{
      cart.push({
        productName:productName,
        quantity:1
      })
    }
}