/**
 * 
 * This function sum all the prices in the cartProducts state
 * @param {Array} products cartProducts
 * @returns {number} Total price
 */
const totalPrice = (products) =>{
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum;
}

export {totalPrice}