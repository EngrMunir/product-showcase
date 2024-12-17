function loadProduct(){
    fetch('./product.json')
    .then(res => res.json())
    .then(data => displayProduct(data))
}

function displayProduct(products){
    const productContainer = document.getElementById('products-container')
    for(const product of products){
        const productDiv = document.createElement('div')
        productDiv.innerHTML=`
            <div class="bg-white w-64 shadow-xl rounded-lg overflow-hidden">
                <figure>
                    <img
                    src=${product.image}
                    alt=${product.name}
                    class="w-full h-48 object-cover"
                    />
                </figure>
            <div class="p-4">
                <h2 class="text-2xl font-semibold">
                Shoes!
                </h2>

                <!-- Description -->
                <p class="text-gray-600 mt-2">
                If a dog chews shoes whose shoes does he choose?
                </p>
            </div>
        </div>
        `
        productContainer.appendChild(productDiv)
    }
}

loadProduct();