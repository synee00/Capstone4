
var cart = new Array();
var cartQuantity = new Array();
var cartPrices = new Array();

var totalItems = 0;
var cartTotal = 0.0;


function getItems()
{
  if(document.getElementById('caviar').checked) {
    totalItems = cart.push("Caviar");
    var numItemsEl = document.getElementById("caviarQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);
    cartPrices.push(15.99);
  }
  
  if(document.getElementById('truffles').checked) {
    totalItems = cart.push("Truffles");
    var numItemsEl = document.getElementById("trufflesQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);
    cartPrices.push(20.99);

  }
  
  if(document.getElementById('avocado').checked) {
    totalItems = cart.push("Avocado Toast");
    var numItemsEl = document.getElementById("avocadoQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);
    cartPrices.push(10.00);
    }
  
  if(document.getElementById('soul').checked) {
    totalItems = cart.push("One Pure Soul");
    var numItemsEl = document.getElementById("soulQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);    cartPrices.push(100.99);
  }
  
  if(document.getElementById('escargot').checked) {
    totalItems = cart.push("Escargot");
    var numItemsEl = document.getElementById("escargotQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);    cartPrices.push(50.99);
  }
  
  if(document.getElementById('crab').checked) {
    totalItems = cart.push("Sebastian (Crab)");
    var numItemsEl = document.getElementById("crabQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);    cartPrices.push(45.00);
  }
  
  if(document.getElementById('lobster').checked) {
    totalItems = cart.push("Dancing Lobster");
    var numItemsEl = document.getElementById("lobsterQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);    cartPrices.push(85.00);
  }
  
  if(document.getElementById('soy').checked) {
    totalItems = cart.push("Soy");
    var numItemsEl = document.getElementById("soyQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);    cartPrices.push(3.99);
  }
  
  if(document.getElementById('lamb').checked) {
    totalItems = cart.push("Silence of the Rack Lamb");
    var numItemsEl = document.getElementById("lambQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);    cartPrices.push(75.00);
  }
  
  if(document.getElementById('cheesecake').checked) {
    totalItems = cart.push("Let Them Have (Cheese) Cake");
    var numItemsEl = document.getElementById("cheesecakeQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);    cartPrices.push(800.00);
  }
  
  if(document.getElementById('sherbert').checked) {
    totalItems = cart.push("Blood (Orange) of Your Enemies");
    var numItemsEl = document.getElementById("sherbertQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);    cartPrices.push(25.00);
  }
  
  if(document.getElementById('tea').checked) {
    totalItems = cart.push("Matcha Tea");
    var numItemsEl = document.getElementById("teaQ");
    var numItems = numItemsEl.value; 
    cartTotal = cartQuantity.push(numItems);     cartPrices.push(5.99);
  }
  
  
  //loop through and print cart to page
  //alert("Function executed!")
  var newListHeader = document.createElement("h1");
  newListHeader.innerHTML = "Shopping List";
  var divList = document.getElementById("shoppingList");
  divList.appendChild(newListHeader);

  //getElementById("shoppingList");
  
  for (i = 0; i < cart.length; i++) {
    var newList = document.createElement("li");
    newList.innerHTML = cart[i] + " " + cartPrices[i].toFixed(2) + " x" + cartQuantity[i];
    divList.appendChild(newList);
    
    cartTotal += cartQuantity[i];
    
  }
  var divTotal = document.getElementById("listTotal");
  var newTotal = document.createElement("p");
  newTotal.innerHTML = "Total: $" + cartTotal;
  divTotal.appendChild(newTotal);

}