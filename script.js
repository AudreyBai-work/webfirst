let cart = [];
let total = 0;

// Function to add items to the cart
function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalDisplay = document.getElementById("total");
    
    // Clear the current cart display
    cartList.innerHTML = "";

    // Add each item in the cart
    cart.forEach((cartItem, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${cartItem.item} - $${cartItem.price}`;
        
        // Add a remove button for each item
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);
        
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });

    // Update the total price display
    totalDisplay.textContent = `Total: $${total}`;
}

// Function to remove items from the cart
function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// Function to handle checkout
function checkout() {
    if (cart.length > 0) {
        alert(`Thank you for your purchase! Your total is $${total}.`);
        cart = [];
        total = 0;
        updateCart();
    } else {
        alert("Your cart is empty!");
    }
}
