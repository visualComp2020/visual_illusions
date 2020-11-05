$("#Scale").change(function() {
    var value = $("#Scale").val();
    $(".square").css({ 'height' : value });
    $(".square").css({ 'width' : value });
    $(".bottom").css({ 'margin-top' : 450 - (2 * value) });
    $(".left").css({ 'margin-right' : 450 - (2 * value) });
});

$("#Transparency").change(function() {
    var value = $("#Transparency").val() / 100;
    $(".square").css({ 'opacity' : value });
});