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
  if (this.cheese === "premium") {
    cheesePrice += 1.79;
  }
  return cheesePrice;
}

//Returns the cost of the sauce on the pizza
Pizza.prototype.determineSauceCost = function() {
  var saucePrice = 0;
  if (this.sauce === "premium") {
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

//Adds the cost of the pizza to the running total for all pizzas
function calculateFinal(currentCost, newCost) {
  cost1 = parseFloat(currentCost);
  cost2 = parseFloat(newCost);
  var total = cost1 + cost2;
  total = total.toFixed(2);
  return total;
}

//UI Logic
$(function(){

  var currentPrice = 0;
  var finalPrice = 0;

  //Submits initial order
  $(".user-order").submit(function(event){
    event.preventDefault();

    var size = $("#sizes").val();
    var cheese = $("input[name=cheese]:checked").val();
    if(cheese === undefined) {
      cheese = "basic farmer's";
    }
    var sauce = $("input[name=sauce]:checked").val();
    if (sauce === undefined) {
      sauce = "basic home-made tomato";
    }
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
    finalPrice = calculateFinal(currentPrice, finalPrice)
    $("#current-total").text(finalPrice);
    $(".size-of-pizza").text(pizzaOrder.size);
    $(".premium-cheese").text(pizzaOrder.cheese);
    $(".premium-sauce").text(pizzaOrder.sauce);
    $(".amount-toppings").text(pizzaOrder.toppings);
    $(".amount-meats").text(pizzaOrder.meats);
  });

  //Allows the user to order another pizza
  $("#add-button").click(function(){
    $(".order-area").show();
    document.getElementById("order").reset();
    $(".status").hide();
  });

  //Allows to user to start over
  $("#start-over-button").click(function(){
    location.reload();
  });

  //Allows the user to finish their order
  $("#finish-button").click(function(){
    $(".status").hide();
    $(".final").show();
    $(".menu").hide();
    $("header").hide();
    $("#frodo").show();
    location.hash = "#frodo";
    $("#final-price").text(finalPrice);
  });

  //Allows the user to place a new order
  $("#new-order-button").click(function(){
    location.reload();
  });

});
