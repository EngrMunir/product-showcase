function loadProduct(){
    fetch('../product.json')
    .then(res => res.json())
    .then(data => displayProduct(data))
}

function displayProduct(products){
    const productContainer = document.getElementById('products-container')
    for(const product of products){
        const productDiv = document.createElement('div');
        productDiv.className = 'col-12 col-sm-6 col-md-4 col-lg-2';
        productDiv.innerHTML=`
            <div class="card border-0 shadow-sm">
              <img
                src=${product.image}
                class="card-img-top"
                alt="Product Image"
              />
              <div class="card-body text-center">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-muted">${product.price}</p>
              </div>
            </div>
        `
        productContainer.appendChild(productDiv)
    }
}

loadProduct();