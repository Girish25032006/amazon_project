import { cart,push_in_array } from "./cart.js";
import { products } from "../data/products.js";
let producthtml ='';
products.forEach((product)=>{
   producthtml+=`
   <div class="div_1">
          <div>
            <img src="${product.image}" class="product_img1">
          </div>
          
          <div class="product_sentence1">
            <h4 class="content">"${product.name}</h4>
          </div>
          <div class="product_rting">
            <img src="images/ratings/rating-${product.rating.stars * 10}.png" class="product_strs">
            <h3 class="rting_no">${product.rating.count}</h3>
          </div>
          <div class="product_cost">
            <h4>$${(product.priceCents / 100).toFixed(2)}</h4>
          </div>
          <div class="product_quntity">
            <select class="option">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="2">4</option>
              <option value="2">5</option>
              <option value="2">6</option>
              <option value="2">7</option>
              <option value="2">8</option>
              <option value="2">9</option>
              <option value="2">10</option>
            </select>
          </div>
          
          <div class="add_to_crt  " >
            <button class="crt_btn js-crt_btn" data-product-id ="${product.id}">Add to Cart</button>
          </div>
      </div>
  `
  
});

document.querySelector('.row1').innerHTML=producthtml;


function cartquantity_total(){
  let cartquantity=0;
  cart.forEach((cartItem)=>{
    cartquantity+=cartItem.quantity;
  })
  
  
  document.querySelector('.cart_number').innerHTML=cartquantity;
 
}

document.querySelectorAll('.js-crt_btn')
.forEach((button)=>{
  button.addEventListener('click',()=>{
   const productId = button.dataset.productId;
   push_in_array(productId)
   cartquantity_total()
   
  })
 
})
function addtocart(){
  let addedcart = document.querySelector('crt_btn').value;
  document.querySelector('.result').innerHTML='Added to cart'
}
