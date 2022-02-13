// get input value from product id
function getInput(product){
    const productInput = document.getElementById(product + "-quantity")
    let productQuantity = parseInt(productInput.value)
    return productQuantity
}

// update product
function updateProduct(product, price, isIncreasing){
    const getQuantity = document.getElementById(product + "-quantity")
    document.getElementById(product + "-price").innerText = price

    // get quantity
    let productQuantity = parseInt(getQuantity.value)
    if (isIncreasing) {
        productQuantity = parseInt(productQuantity) + 1;
    }
    else if (productQuantity > 0) {
        productQuantity = parseInt(productQuantity) - 1;
    }
    getQuantity.value = productQuantity

    // update price
    let productTotal = document.getElementById(product + "-total")
    productTotal.innerText = productQuantity * price
    calculateTotal()
}

// calculate total price
function calculateTotal(){
    let jacketTotal = getInput("jacket") * 210
    let hoodieTotal = getInput("hoodie") * 199
    let skirtTotal = getInput("skirt") * 299

    const subtotal = jacketTotal + hoodieTotal + skirtTotal
    const vat = subtotal * 0.1
    const grandTotal = subtotal + vat

    document.getElementById("subtotal").innerText = subtotal
    document.getElementById("vat").innerText = vat
    document.getElementById("grandtotal").innerText = grandTotal
}


// jacket
document.getElementById("jacket-plus").addEventListener("click", function(){
    updateProduct("jacket", 210, true)
})
document.getElementById("jacket-minus").addEventListener("click", function(){
    updateProduct("jacket", 210, false)
})

// hoodie
document.getElementById("hoodie-plus").addEventListener("click", function(){
    updateProduct("hoodie", 199, true)
})
document.getElementById("hoodie-minus").addEventListener("click", function(){
    updateProduct("hoodie", 199, false)
})

// skirt
document.getElementById("skirt-plus").addEventListener("click", function(){
    updateProduct("skirt", 299, true)
})
document.getElementById("skirt-minus").addEventListener("click", function(){
    updateProduct("skirt", 299, false)
})
