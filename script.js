let quantity = 0;

document.getElementById("show").addEventListener("click", function() {
    document.getElementById("quantity").innerText = quantity;
});

document.getElementById("add").addEventListener("click", function() {
    quantity++;
    
});

document.getElementById("plus2").addEventListener("click", function() {
    quantity += 2;
   
});

document.getElementById("plus3").addEventListener("click", function() {
    quantity += 3;
    
});

document.getElementById("reset").addEventListener("click", function() {
    quantity = 0;
    
});