/* Tool TIP : You win! */

$(document).ready(function(){
    $("#myTooltip").tooltip({
        title:"<h4><img src='./img/smily.png' alt='YO'> You win, <b>&euro;1000</b> <i>BONUS!</i></h4>", html:true,
    });
});

/* Toast */
$(document).ready(function(){
    $(".show-toast").click(function(){
        $("#myToast").toast('show');
    });
    $("hide-toast").click(function(){
        $("#myToast").toast('hide');
    });
    $(".dispose-toast").click(function(){
        $("#myToast").toast('dispose');
    });
})