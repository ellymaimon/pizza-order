//Business Logic

//Builds a pizza object
function Pizza(size, cheese, sauce, toppings, meats) {
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.toppings = toppings;
  this.meats = meats;
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
  if (this.sauce === "isengard" || this.sauce === "gravy" || this.sauce === "haradim") {
    saucePrice += 1.99;
  }
  return saucePrice;
}

//Returns the cost of the toppings on the pizza
Pizza.prototype.determineToppingsCost = function() {
  var toppingsPrice = 0;
  toppingsPrice = this.toppings * 0.99;
  return toppingsPrice;
}

//Returns the cost of the meat on the pizza
Pizza.prototype.determineMeatsCost = function() {
  var meatPrice = 0;
  meatPrice = this.meats * 2.25;
  return meatPrice;
}

//Determines the total cost of a pizza
function calculateCost (pizza) {
  var price = 0;
  var sizeCost = pizza.determineSizeCost();
  var cheeseCost = pizza.determineCheeseCost();
  var sauceCost = pizza.determineSauceCost();
  var toppingsCost = pizza.determineToppingsCost();
  var meatsCost = pizza.determineMeatsCost();
  price = sizeCost + cheeseCost + sauceCost + toppingsCost + meatsCost;
  price = price.toFixed(2);
  return price;
}

//UI Logic
$(function(){
  
  $(".user-order").submit(function(event){
    event.preventDefault();
    var size = $("#sizes").val();
    var cheese = $("input[name=cheese]:checked").val();
    var sauce = $("input[name=sauce]:checked").val();
    var toppings = 0;
    var meats = 0;

    $(".topping:checked[type='checkbox']").each(function() {
      toppings++;
    });

    $(".meat:checked[type='checkbox']").each(function() {
      meats++;
    });

    var pizzaOrder = new Pizza(size, cheese, sauce, toppings, meats);

    var finalPrice = calculateCost(pizzaOrder);

    console.log("$" + finalPrice);
    $(".receipt").show();
    $("#final-price").text(finalPrice);
  });
});
