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
    
// Add pizza button
    $("#addPizza").click(function(){
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
           console.log("The price is "+price);
         break;
         case "Regular":
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

    });
    // Checkout button
    $("#checkout").click(function(){ 
      $("#pizzatotal").append("Your bill is "+ checkoutTotal);
    });
   event.preventDefault();
  });
});