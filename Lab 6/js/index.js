$(".agregar").on("click", function(e) {
    e.preventDefault();
    if($("#newText").val() == "") {
        alert("Make sure to add an item to your list");
    } else {
        var aux = $("#newText");
        $(".Lista").append(`<div class="lis"><li class="itemShop">${aux.val()}</li><button class="checar">Check</button><button class="del">Delete</button></div>`)
        aux.val("");
    }
});
  
$(".Lista").on("click", ".checar", function(e) {
    e.preventDefault();
    var aux = $(this).parent();
    aux.toggleClass("chec");
});

$(".Lista").on("click", ".del", function(e) {
    e.preventDefault();
    var aux = $(this).parent();
    aux.remove();
});