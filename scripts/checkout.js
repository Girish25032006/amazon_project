import { cart } from "./cart.js";
import { products } from "../data/products.js";
let cart_summery = '';
cart.forEach((cartItem)=>{
  const productId= cartItem.productId;
  let matchingproduct;
  products.forEach((product)=>{
    if(product.id === productId){
      matchingproduct = product;
    }
    
  });
  
    cart_summery +=
    `
    <div class="order_list">
      <h2 class="del_date">Delivery date: Tuesday, June 21</h2>
      <div class="product_detail">
        <img src="${matchingproduct.image}" class="products-img">
       <div class="name_option">
         <div>
          <h3 class="product_name">${matchingproduct.name}</h3>
          <h3 class="product_cost">$${(matchingproduct.priceCents / 100).toFixed(2)}</h3>
          <h3 class="product_quantity ">Quantity: ${cartItem.quantity}<scan class="Update1">Update 
            </scan><scan class="Update2">Delete</scan></h3>
        </div>
        <div class="product_date_year">
          <h3 class="choose-del">Choose a delivery option:</h3>
          <label class="input_div">
            <input type="radio" class="input-1" name="delivery">
            <h3 class="product_date"><scan class="date">Tuesday, June 21</scan><br>FREE Shipping</h3>
          </label>
          <label class="input_div">
            <input type="radio" class="input-1" name="delivery">
            <h3 class="product_date"><scan class="date">Wednesday, June 15</scan><br>$4.99 - Shipping</h3>
          </label>
          <label class="input_div" >
            <input type="radio" class="input-1" name="delivery">
            <h3 class="product_date"><scan class="date">Monday, June 13</scan><br>$9.99 - Shipping</h3>
          </label>
        </div>
       </div>
      </div>
    </div>

  `
});
document.querySelector('.side_bar').innerHTML=cart_summery;
