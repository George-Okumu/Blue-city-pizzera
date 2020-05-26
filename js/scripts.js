function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


$(document).ready(function(){
  $("#your-order").click(function(event){
   let pname = $("#name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1200;
       console.log(price);
     break;
     case "medium":
       price = 800;
       console.log("The price is " + price);
     break;
     case "regular":
       price = 500;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 300;
      break;
      case "Stuffed":
        crust_price = 250;
      break;
      case "Gluten-free":
        crust_price = 280;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = ptopping.length*40;
    console.log("toppins value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("#your-order").show();
      $("#summary").show();
      $("#order").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("#your-order").hide();
      $("#summary").hide();
      $("#order").fadeIn(2000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzatype").html($("#name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#topping").html(ptopping.join(", "));
    $("#Totals").html(total);
    
   /* //Add pizza button

    var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

    $("#addpizza").click(function(){
      $("#your-order").show();
      //$("#pizzatype").html($("#name option:selected").val());
      //$("#pizzasize").html( $("#size option:selected").val());
      //$("#pizzacrust").html($("#crust option:selected").val());
      //$("#topping").html(ptopping.join(", "));
      //$("#Totals").html(total);
    });

    $("#addpizza").click(function(){
      $("#neworder").html('<tr><td id="pizzaname">'+newOrder.pizzatype +'</td><td id="pizzasize">' + newOrder.pizzasize + '</td><td id="pizzacrust">'+newOrder.pizzacrust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="Totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
    });*/

    // Checkout button
    $("#checkout").click(function(){ 
      $("#pitzatotal").fadeIn(100);
      $("#pizzatotal").html("Your bill is "+ checkoutTotal);
    });

    $("#checkout").click(function(){ 
      $("#checkout").hide();
      $("#addPizza").hide();
      $("#addedprice").slideDown(1000);
    });


    //delivery button
    $("#deliver").click(function(){
      event.preventDefault();
      $("#pitzatotal").hide();
      $("#checkout").hide();
      $("#addpizza").hide();
      $(".text-center13").hide();
      $(".delivery").show();
    });

    //Final submission
    $("#proceed").click(function(){
      event.preventDefault();
      $(".delivery").hide();
      $(".text-center13").hide();
      $("#deliver").hide();
      $(".text-center12").hide();

      let deliceryamount= checkoutTotal+200;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
        $("#finalorder").html(person + ", We have recieved your order and it will be delivered to you at "+ location + ".Total amount is kshs. "+ deliceryamount +".Thank you for shopping with us.");
        //$("#totalbill").hide();
        $("#finalorder").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    })

   event.preventDefault();
  });
});