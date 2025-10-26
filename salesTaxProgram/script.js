function calculateTax() {
    const taxRate = 0.07;
    let price = parseFloat(document.getElementById('amount').value);
    const taxedPrice = price * taxRate;
    const totalPrice = price + taxedPrice;
    // the toFixed() method takes off 
    // anything after 2 decimal places
    document.getElementById('output').innerHTML = `The total after tax is ${totalPrice.toFixed(2)}`;
    // creates a validation for non-numeric characters - i could turn type
    //  property to number
    //  but this is a more extended version to practice JS
    if(isNaN(price)) {
        document.getElementById('output').innerHTML = "Numeric Characters Only";
    //    removes the incorrect characters from the input VVVVVV
        document.getElementById('amount').value = "";
    
    }
};