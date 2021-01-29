// First Class Item
function handleFirstClassChange(isIncrease){
    const firstClassInput = document.getElementById('first-class-quantity');
    const firstClassQuantity = parseInt(firstClassInput.value);
    let firstClassNewQuantity = firstClassQuantity;
    if (isIncrease == true) {
        firstClassNewQuantity = firstClassQuantity + 1;    
    };
    if (isIncrease == false && firstClassQuantity > 0) {
        firstClassNewQuantity = firstClassQuantity - 1;   
    };
    firstClassInput.value = firstClassNewQuantity;
    firstClassPrice = firstClassNewQuantity * 150;
    calculateTotal();
};
// Economy Item
function handleEconomyChange(isIncrease){
    const economyInput = document.getElementById('economy-quantity');
    const economyQuantity = parseInt(economyInput.value);
    let economyNewQuantity = economyQuantity;
    if (isIncrease == true) {
        economyNewQuantity = economyQuantity + 1;     
    };
    if (isIncrease == false && economyQuantity > 0) {
        economyNewQuantity = economyQuantity - 1;    
    };
    economyInput.value = economyNewQuantity;
    economyPrice = economyNewQuantity * 100;
    calculateTotal();
};
// Total Item
function calculateTotal(){
    const firstClassInput = document.getElementById('first-class-quantity');
    const firstClassQuantity = parseInt(firstClassInput.value);
    const economyInput = document.getElementById('economy-quantity');
    const economyQuantity = parseInt(economyInput.value);
    const totalPrice = firstClassQuantity * 150 + economyQuantity * 100;
    document.getElementById('subtotal-price').innerText = "$" + totalPrice;
    const vat = totalPrice * 0.1;
    document.getElementById('vat-charge').innerText = "$" + vat;
    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = "$" + grandTotal;
};

