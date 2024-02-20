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
    content.innerHTML = '<p>Loading...</p>'
    const data = await fetch ('https://api.noroff.dev/api/v1/rainy-days');
    const jacketList = await data.json();
    // Clear mainContainer inner html 
    content.innerHTML = '';
    if(!data.ok){
        // Show an error
        return;
    }   
    jacketList.forEach(jacket => {
        content.innerHTML += `<div id=${jacket.id}> <p>${jacket.title}</p> <img src=${jacket.image}\> <button onclick="addToCart('${jacket.id}')">Add To Cart</button> </div>`
    });
    //content.innerHTML += `<div> test </div>`

};


// Fix loading screen when loading. Create a div loading text. Have it take the whole screen.





