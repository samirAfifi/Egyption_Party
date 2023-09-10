
$(".nav a i ,.open").click(function(){
    if($(".nav").css("left")=="0px"){
        let translateValue=$(".nav").outerWidth();
        $(".nav").animate({left : -translateValue} , 1000);
    }else{
        $(".nav").animate({left :0} , 1000);

    }
})

$(".item-details").css("display", "block");
$(".item-details button").click(function () {
    $(this).next().toggle(2000);
    $(".item-details p").not($(this).next()).hide(1000);

});

let countDate=new Date('July 31, 2022 23:59:59').getTime();
let counter =setInterval(function(){
    let dayNow= new Date().getTime();
    let dateDiff= countDate - dayNow;
    let days= Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 *24))/(1000*60*60));
    let minutes= Math.floor((dateDiff % (1000 * 60 * 60))/(1000*60));
    let second=Math.floor((dateDiff % (1000 * 60))/(1000));

    $(".day").html(`<h6 class=" fa-2xl">${days} D</h6>`);
    $(".houres").html(`<h6 class=" fa-2xl">${hours} H</h6>`);
    $(".mins").html(`<h6 class=" fa-2xl" >${minutes} M </h6>`);
    $(".secs").html(`<h6 class=" fa-2xl">${second} S</h6>`)
    

} , 1000)

    let Start = 100;
    $("textarea").keyup(function () {
        let Number = $(this).val().length;
        let result = Start - Number;
        if (result >= 0) {
            $(".contNumber").text(result);
            
        } else {
            
            $(".contNumber").text("is not a valid");
        }
    });







    document.addEventListener('aos:in', ({ detail }) => {
        console.log('animated in', detail);
      });
      
      document.addEventListener('aos:out', ({ detail }) => {
        console.log('animated out', detail);
      });






