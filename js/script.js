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
})