$(document).ready(function(){
    $("#input").change(function(){
        var input = $(this).val();
        $("ul").append('<li>'+ input + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i></li>');
        $(this).val();
        $(this).val('');
    });

    $("ul").on("click",".fa-trash",function(){
        $(this).parent().remove();
    });

    $("ul").on("click",".fa-check",function(){
        $(this).parent().css("background-color","#228b22");
        $(this).parent().css("text-decoration","line-through");
        $(this).css("color","white");
    });
});