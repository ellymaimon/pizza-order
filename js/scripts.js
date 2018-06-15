//Builds a pizza object
function Pizza(size, price) {
  this.toppings = [];
  this.size = size;
  this.price = price;
}

//Adds toppings to Pizza
Pizza.prototype.addToppings = function(usersToppings) {
  usersToppings.forEach(function(topping){
    this.toppings.push(topping);
  });
}


//Determines the price of the Pizza
Pizza.prototype.determinePrice = function() {
  var totalToppings = this.toppings.length;
  var addedCost = totalToppings * 0.75;

}



$(function(){
  $(".user-order").submit(function(event){
    event.preventDefault();

  });
});
