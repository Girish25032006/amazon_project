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
          <div class="add_to_crt">
            <button class="crt_btn">Add to Cart</button>
          </div>
      </div>
  `
  
});
document.querySelector('.row-1').innerHTML=html;