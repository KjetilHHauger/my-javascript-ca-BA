fetchJackets();   
// Move to system memory local storage
let cart = [];

function addToCart(jacketID){
    cart.push(jacketID);
    console.log(JSON.stringify(cart));
}
async function fetchJackets () {
    const content = document.querySelector(".mainContainer");
    // Set mainContainer inner html to <p>Loading</p>
    content.innerHTML = '<p>Loading...</p>';
    const data = await fetch ('https://api.noroff.dev/api/v1/rainy-days');
    const jacketList = await data.json();
    // Clear mainContainer inner html 
    content.innerHTML = '';
    jacketList.forEach((jacket) => {
        if (jacket.onSale === true){
            content.innerHTML += `<div id=${jacket.id}> <h2>${jacket.title}</h2> <img src=${jacket.image}\> <button onclick="addToCart('${jacket.id}')">Add To Cart</button> <p>${jacket.description}</p><p>${jacket.gender}</p><p>${jacket.sizes}</p><p>${jacket.baseColor}</p><p class="formerPrice">${jacket.price}</p><p class="discountPrice">${jacket.discountedPrice}</p></div>`;
        };
        if (jacket.onSale === false) {
            content.innerHTML += `<div id=${jacket.id}> <h2>${jacket.title}</h2> <img src=${jacket.image}\> <button onclick="addToCart('${jacket.id}')">Add To Cart</button> <p>${jacket.description}</p><p>${jacket.gender}</p><p>${jacket.sizes}</p><p>${jacket.baseColor}</p><p class="newPrice">${jacket.price}</p></div>`;
        }
    })
}

// Fix loading screen when loading. Create a div loading text. Have it take the whole screen.

// remember to make an error message too
// if(!data.ok){
//     data.innerText = "Sorry we couldn't load the page"
//     return;
// };