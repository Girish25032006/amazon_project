import { cart,push_in_array } from "./cart.js";
const product = [{
  image:'products/backpack.jpg',
  name:'Black Backpack with a compact design,perfect for daily use.',
  rating:{
    stars:3.5,
    count:88
  },
  price:2021
},{
  image:'products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name:'Adults Plain Cotton T-Shirt - 2 Pack',
  rating:{
    stars:4.5,
    count:97
  },
  price:1857
},{
  image:'products/athletic-cotton-socks-6-pairs.jpg',
  name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating:{
    stars:3.5,
    count:73
  },
  price:1381
},{
  image:'products/6-piece-non-stick-baking-set.webp',
  name:'Six-piece nonstick baking pan set',
  rating:{
    stars:4.5,
    count:93
  },
  price:1681
},{
  image:'products/blackout-curtain-set-beige.webp',
  name:'Beige blackout curtain set',
  rating:{
    stars:4.5,
    count:86
  },
  price:1881
},{
  image:'products/6-piece-white-dinner-plate-set.jpg',
  name:'Six-piece white dinner plate set',
  rating:{
    stars:5,
    count:99
  },
  price:1181
},{
  image:'products/coffeemaker-with-glass-carafe-black.jpg',
  name:'Black coffee maker with glass carafe',
  rating:{
    stars:4,
    count:88
  },
  price:2181
},{
  image:'products/countertop-blender-64-oz.jpg',
  name:'Countertop blender with large jar',
  rating:{
    stars:4.5,
    count:79
  },
  price:2981
},{
  image:'products/double-elongated-twist-french-wire-earrings.webp',
  name:'Gold elongated twist drop earrings',
  rating:{
    stars:4.5,
    count:83
  },
  price:3191
},{
  image:'products/duvet-cover-set-blue-twin.jpg',
  name:'Blue twin duvet cover set',
  rating:{
    stars:1.0,
    count:23
  },
  price:4111
},{
  image:'products/facial-tissue-2-ply-18-boxes.jpg',
  name:'Two-ply facial tissue box pack',
  rating:{
    stars:4,
    count:63
  },
  price:1981
},{
  image:'products/women-stretch-popover-hoodie-black.jpg',
  name:'Womens black stretch pullover hoodie',
  rating:{
    stars:3.5,
    count:53
  },
  price:2781
},{
  image:'products/women-chunky-beanie-gray.webp',
  name:'Women gray chunky knit beanie',
  rating:{
    stars:5,
    count:93
  },
  price:1481
},{
  image:'products/vanity-mirror-silver.jpg',
  name:'Silver tabletop vanity mirror',
  rating:{
    stars:3,
    count:43
  },
  price:2081
},{
  image:'products/umbrella.jpg',
  name:'Compact folding umbrella',
  rating:{
    stars:4,
    count:80
  },
  price:1881
},{
  image:'products/trash-can-with-foot-pedal-50-liter.jpg',
  name:'50-liter foot pedal trash can',
  rating:{
    stars:5,
    count:97
  },
  price:1181
},{
  image:'products/floral-mixing-bowl-set.jpg',
  name:'Flore mixing bowl set with lids',
  rating:{
    stars:5,
    count:79
  },
  price:1781
},{
  image:'products/sky-flower-stud-earrings.webp',
  name:'Sky blue flower stud earrings',
  rating:{
    stars:4,
    count:81
  },
  price:2381
},{
  image:'products/plain-hooded-fleece-sweatshirt-yellow.jpg',
  name:'Yellow hooded fleece sweatshirt',
  rating:{
    stars:5,
    count:95
  },
  price:2881
},{
  image:'products/non-stick-cooking-set-15-pieces.webp',
  name:'15-piece nonstick cookware set',
  rating:{
    stars:3.5,
    count:63
  },
  price:1281
},{
  image:'products/men-navigator-sunglasses-brown.jpg',
  name:'Mens brown navigator sunglasses',
  rating:{
    stars:4.5,
    count:86
  },
  price:1081
},{
  image:'products/round-airtight-food-storage-containers.jpg',
  name:'Round airtight food storage containers',
  rating:{
    stars:3,
    count:6.1
  },
  price:2681
},{
  image:'products/luxury-tower-set-6-piece.jpg',
  name:'Luxury six-piece towel set',
  rating:{
    stars:4,
    count:83
  },
  price:1681
},{
  image:'products/intermediate-composite-basketball.jpg',
  name:'Intermediate composite basketball',
  rating:{
    stars:3.5,
    count:75
  },
  price:1981
}];
let html ='';
product.forEach((product)=>{
   html+=`
   <div class="div_1">
          <div>
            <img src="${product.image}" class="product_img1">
          </div>
          
          <div class="product_sentence1">
            <h4 class="content">"${product.name}</h4>
          </div>
          <div class="product_rting">
            <img src="ratings/rating-${product.rating.stars * 10}.png" class="product_strs">
            <h3 class="rting_no">${product.rating.count}</h3>
          </div>
          <div class="product_cost">
            <h4>$${(product.price / 100).toFixed(2)}</h4>
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
            <button class="crt_btn  js-crt_btn" data-product-name ="${product.name}">Add to Cart</button>
          </div>
      </div>
  `
  
});
document.querySelector('.row-1').innerHTML=html;



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
   const productName = button.dataset.productName;
   push_in_array(productName)
   cartquantity_total()
   
  })
 
})
 
