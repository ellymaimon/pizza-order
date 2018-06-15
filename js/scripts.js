//Builds a pizza object
function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
}


//Returns the cost of the size of the pizza
Pizza.prototype.determineSizeCost = function() {
  var sizePrice = 0;
  if (this.size === "Halfling") {
    sizePrice += 8.99;
  } else if (this.size === "Dwarf") {
    sizePrice += 11.99;
  } else if (this.size === "King") {
    sizePrice += 14.99;
  } else if (this.size === "Uruk-Hai") {
    sizePrice += 17.99;
  } else if (this.size === "Cave Troll") {
    sizePrice += 19.99
  }
  return sizePrice;
}

//Returns the cost of the toppings on the pizza
Pizza.prototype.determineToppingsCost = function() {
  var toppingsPrice = 0;
  toppingsPrice = this.toppings * 0.75;
  return toppingsPrice;
}



$(function(){
  $(".user-order").submit(function(event){
    event.preventDefault();

    var pizzaOrder = new Pizza();
  });
});
