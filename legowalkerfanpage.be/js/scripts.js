console.log("He hallo");

/*
document.getElementById("btn").addEventListener('click',function()
{this.style.color = "#ff0000";});
*/

// 1 selector 
// 2 functie
// 3 voorzie de functie van parameters

/*
$("body").fadeOut(20000);
*/

/*
$(".thumb-cont a").animate({ "margin-left" : "100px"}, 1000);
*/

$("#btn").click(function(){
    $(".thumb-cont a").animate({ "margin-left" : "100px"}, 1000);
    $(this).html("Geklikt");

/*
    $("body").fadeOut(2000);
*/
  
});