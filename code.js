$(document).ready(function () {
    $("button").click(calculateBAC);
    function calculateBAC() {
        var beerNum = $("#beers").val();
        beerNum = parseFloat(beerNum);

        var wineNum = $("#wine").val();
        wineNum = parseFloat(wineNum);

        var shotsNum = $("#shots").val();
        shotsNum = parseFloat(shotsNum);

        var weight = $("#weight").val();
        weight = parseFloat(weight);

        var hours = $("#hours").val();
        hours = parseFloat(hours);

        var alcoholConsumed = ((beerNum * .54) + (wineNum * .6) + (shotsNum * .6));
        var yourBAC = (((alcoholConsumed * 7.5) / weight) - (hours * .015));
        var yourBACDisplay = yourBAC.toFixed(3);
        $("#BAC").text(yourBACDisplay);
        $(".output").show();
    }
});