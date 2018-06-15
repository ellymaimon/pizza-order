//Business Logic

//Builds a pizza object
function Pizza(size, cheese, sauce, toppings) {
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.toppings = toppings;
}

//Returns the cost of the size of the pizza
Pizza.prototype.determineSizeCost = function() {
  var sizePrice = 0;
  if (this.size === "Hobbit") {
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

//Returns the cost of the cheese on the pizza
Pizza.prototype.determineCheeseCost = function() {
  var cheesePrice = 0;
  if (this.cheese === "dunland" || this.cheese === "misty" || this.cheese === "brandy") {
    cheesePrice += 1.79;
  }
  return cheesePrice;
}

//Returns the cost of the sauces on the pizza
Pizza.prototype.determineSauceCost = function() {
  var saucePrice = 0;

}

//Returns the cost of the toppings on the pizza
Pizza.prototype.determineToppingsCost = function() {
  var toppingsPrice = 0;
  toppingsPrice = this.toppings * 0.99;
  return toppingsPrice;
}



//UI Logic
$(function(){
  $(".user-order").submit(function(event){
    event.preventDefault();
    var size = $("#sizes").val();
    var cheese = $("input[name=cheese]:checked").val();
    var toppings = 0;
    var finalPrice = 0;

    $(".topping:checked[type='checkbox']").each(function() {
      toppings ++;
    });

    var pizzaOrder = new Pizza(size, cheese, sauce, toppings);
    sizeCost = pizzaOrder.determineSizeCost();
    cheeseCost = pizzaOrder.determineCheeseCost();
    sauceCost = pizzaOrder.determineCheeseCost();
    toppingsCost = pizzaOrder.determineToppingsCost();


    finalPrice = sizeCost + cheeseCost + toppingsCost;
    finalPrice = finalPrice.toFixed(2);
    console.log("$" + finalPrice);
    $(".receipt").show();
    $("#final-price").text(finalPrice);
  });
});
