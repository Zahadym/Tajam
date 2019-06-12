$(document).ready(function(){

    $('#next').on("click", function(event){
        $('#photo2').addClass('your--active');
        $('#photo3').removeClass('your--active');
    });
});