function Order(pizzaSize, pizzaToppings, pizzaCrust) {
    
    this.pizza = pizzaSize;
    this.toppings = pizzaToppings;
    this.crust = pizzaCrust;
  }
  let orders = []
function order(){
        var pizzaSize = 
            document.getElementById("size").value;
        var toppings =
            document.getElementById("top").value;
        var crust =
            document.getElementById("crust").value;
             
     var newOrder = new Order(pizzaSize, toppings, crust);
orders.push(newOrder)
orders.forEach((order)=>{
    console.log(order)
    document.getElementById("response").innerHTML+=`<p>${order.pizza}</p>`
    document.getElementById("response").innerHTML+=`<p>${order.toppings}</p>`
    document.getElementById("response").innerHTML+=`<p>${order.crust}</p>`

})    
}
