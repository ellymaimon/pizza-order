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

//Adds the current pizza cost to the total for all pizzas
function calculateFinal(currentCost, newCost) {
  cost1 = parseFloat(currentCost);
  cost2 = parseFloat(newCost);
  var total = cost1 + cost2;
  total = total.toFixed(2);
  return total;
}

//Determines the total cost of a single pizza
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
  var currentPrice = 0;
  var finalPrice = 0;

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

    currentPrice = calculateCost(pizzaOrder);
    $(".status").show();
    $(".order-area").hide();
    $("#current-price").text(currentPrice);
    console.log(currentPrice);
  });

  $("#add-button").click(function(){
    console.log(currentPrice);
    finalPrice = calculateFinal(currentPrice, finalPrice)
    console.log(finalPrice);
    $(".order-area").show();
    document.getElementById("order").reset();
    $(".status").hide();

  });

  $("#finish-button").click(function(){
    finalPrice = calculateFinal(currentPrice, finalPrice)
    console.log(finalPrice);
    $(".status").hide();
    $(".final").show();
    $("#final-price").text(finalPrice);
  });

  $("#new-order-button").click(function(){
    location.reload();
  });


});
