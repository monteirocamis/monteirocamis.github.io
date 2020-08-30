$(document).ready(function() {
    $( ".img-flip" ).mouseover( function() {
        $(this).addClass('flip');
    }).mouseout(function(){
        $(this).removeClass('flip');
    })
});
