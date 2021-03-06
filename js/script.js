$(document).ready(function () {
    console.log("Content Loaded");
    
    function Order(size, topping, crust) {
        this.Pizzasize = size;
        this.Pizzatopping = topping;
        this.Pizzacrust = crust;
        this.address = []
    }
    function Addresses(county, city, street) {
        this.county = county;
        this.city = city;
        this.street = street;
    }
    function OrderCost(sizeCost, toppingCost, crustCost, deliveryCost, totalCost) {
        this.sizeCost = sizeCost;
        this.toppingCost = toppingCost;
        this.crustCost = crustCost;
        this.deliveryCost = deliveryCost;
        this.totalCost = totalCost;

        totalCost = sizeCost + toppingCost + crustCost + deliveryCost;
    }

    Order.prototype.fullOrder = function () {
        return "Pizza size: " + this.Pizzasize + " " + "Pizza Topping: " + this.Pizzatopping + " " + "Pizza Crust: " + this.Pizzacrust;
    };
    Addresses.prototype.fullAddress = function () {
        return this.street + ", " + this.city + ", " + this.county;
    }

    // User Interface Logic
    function resetFields() {
        $("input#pizzaNumber").val("");
        $("input#county").val("");
        $("input#city").val("");
        $("input#street").val("");
    };
    $("#addOrder").click(function () {
        $("#pizzaOrder").append('<div class="newOrder mt-3">' +
            '<select class="size form-select" aria-label="Default select example">' +
            '<option selected>Choose Your Pizza Size</option>' +
            '<option value="large">Large</option>' +
            '<option value="medium">Medium</option>' +
            '<option value="small">Small</option>' +
            '</select>' +
            '<div class="topping mt-3">' +
            '<h4>Choose Your Favourite Toppings</h4>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">BBQ (Ksh 100)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">' +
            '<label class="form-check-label" for="inlineCheckbox2">Pepperoni (Ksh 120)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">' +
            '<label class="form-check-label" for="inlineCheckbox3">Cheese (Ksh 50)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">Hawaiian (Ksh 100)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">Margheritha (Ksh 150)</label>' +
            '</div>' +
            '<div class="form-check form-check-inline">' +
            '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">' +
            '<label class="form-check-label" for="inlineCheckbox1">Quattro (Ksh 100)</label>' +
            '</div>' +
            '</div>' +
            '<select class="crust form-select mt-3" aria-label="Default select example">' +
            '<option selected>Choose     Your Pizza Crust</option>' +
            '<option value="Crispy">Crispy</option>' +
            '<option value="Stuffed">Stuffed</option>' +
            '<option value="Gluten-Free">Gluten-Free</option>' +
            '</select>' +
            '<input type="number" class="form-control mt-3" id="pizzaNumber" placeholder="Number of pizzas" min="1" required />' +
            '</div>'
        );
    });
    $('#addDelivery').click(function () {
        $("#newAddress").show();
    })
    $("form#orderForm").submit(function (event) {
        event.preventDefault();

        let inputtedPizzaSize = $("select.size").val();
        let inputtedPizzaTopping = $(".topping").val();
        let inputtedPizzaCrust = $("select.crust").val();
        let inputtedPizzaNumber = $("input#pizzaNumber").val();
        let newOrder = new Order(inputtedPizzaSize, inputtedPizzaTopping, inputtedPizzaCrust);


        $("#new-address").each(function () {
            let inputtedCounty = $(this).find("input#county").val();
            let inputtedCity = $(this).find("input#city").val();
            let inputtedStreet = $(this).find("input#street").val();
            let newAddress = new Addresses(inputtedCounty, inputtedCity, inputtedStreet);
            newOrder.address.push(newAddress);

            
        });
        
        $("#checkoutBtn").click(function () {
            $("#orderCheckout").show();
            $(".size").text(Order.Pizzasize);
            $(".topping").text(Order.Pizzatopping);
            $(".crust").text(Order.Pizzacrust);
            $(".location").text(Addresses.fullAddress);
        });
        
        let orderConfirmation = false
        orderConfirmation = confirm("Please confirm your order");
        if (orderConfirmation == true) {
            alert("Order Placed Successfully");
        }
    });
    
    // Calculating the total order  
    $("#contactUs").submit(function () {
        alert("Thank You For Your Feedback")
    });

});