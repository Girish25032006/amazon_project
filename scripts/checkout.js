import { cart,deleted_product } from "./cart.js";
import { products } from "../data/products.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { delivaryoptions } from "../data/delivary.js";

const today=dayjs();
const yesterday=today.add(7,'days');
console.log( yesterday.format('dddd MMMM D'))
let cart_summery = '';
cart.forEach((cartItem)=>{
  let productId= cartItem.productId;
  let matchingproduct;
  products.forEach((product)=>{
    if(product.id === productId){
      matchingproduct = product;
    }
    
  });
  
    cart_summery +=
    `
    <div class="order_list  js-order-list-${matchingproduct.id}">
      <h2 class="del_date">Delivery date: Tuesday, June 21</h2>
      <div class="product_detail">
        <img src="${matchingproduct.image}" class="products-img">
       <div class="name_option">
         <div>
          <h3 class="product_name">${matchingproduct.name}</h3>
          <h3 class="product_cost">$${(matchingproduct.priceCents / 100).toFixed(2)}</h3>
          <h3 class="product_quantity ">Quantity: ${cartItem.quantity}<scan class="Update1">Update 
            </scan><scan class="Update2" data-product-id=${matchingproduct.id}>Delete</scan></h3>
        </div>
        <div class="product_date_year">
          <h3 class="choose-del">Choose a delivery option:</h3>
          ${delivarydays(matchingproduct)}
        </div>
       </div>
      </div>
    </div>

  `
});
function delivarydays(matchingproduct){
  let html = '';
  delivaryoptions.forEach((delivaryoption)=>{
    const today = dayjs();
    const afteradays = today.add(delivaryoption.delivarydays,'days');
    const formate = afteradays.format('dddd,MMMM D');
    const price = delivaryoption.priceCents === 0?'FREE':`$${(delivaryoption.priceCents / 100).toFixed(2)}`
   
    html+=
    `
    <label class="input_div" >
      <input type="radio" class="input-1" name="delivery-${matchingproduct.id}">
      <h3 class="product_date"><scan class="date">${formate}</scan><br>${price}- Shipping</h3>
    </label>
    `

  })
  return html;

}
 

document.querySelector('.side_bar').innerHTML=cart_summery;
document.querySelectorAll('.Update2')
.forEach((link)=>{
  link.addEventListener('click',()=>{
    const productId=link.dataset.productId;
    deleted_product(productId)
    const removing_data= document.querySelector(`.js-order-list-${productId}`);
    removing_data.remove();    
  });
});

let num =0;
cart.forEach((cartItem)=>{
let productId = cartItem.productId
  products.forEach((product)=>{
    if(product.id === productId){
      num +=1
    }  
  }); 
});
document.querySelector('.font-bold').innerHTML = `(${num} items)`;

