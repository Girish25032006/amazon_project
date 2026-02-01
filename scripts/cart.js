 export let cart = [{
  productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2
 },{
  productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity:1
 }];

 export function push_in_array(productId){
  let matching_product;
   cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matching_product = cartItem;
   }
   });
    if(matching_product){
     matching_product.quantity +=1;
    }
    else{
      cart.push({
        productId:productId,
        quantity:1
      })
    }
}
let newcart=[];
export function deleted_product(productId){
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newcart.push(cartItem);
    }

  });
  cart=newcart;
  
}