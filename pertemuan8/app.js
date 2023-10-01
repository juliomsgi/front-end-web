function plotDonut(indo, france, canada, usa, argentina) {
    var xArray = ["Indonesia", "France", "Canada", "USA", "Argentina"];
    var yArray = [indo, france, canada, usa, argentina];

    var layout = {title:"World Wide Wine Production"};

    var data = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];

    Plotly.newPlot("myPlot2", data, layout);
}

plotDonut(55, 49, 44, 24, 15);

document.getElementById("id-indo").value = "55";
document.getElementById("id-fr").value = "48";
document.getElementById("id-can").value = "44";
document.getElementById("id-usa").value = "24";
document.getElementById("id-arg").value = "80";

document.getElementById("btn-update").onclick = function() {
    var val_indo = document.getElementById("id-indo").value;
    var val_fr = document.getElementById("id-fr").value;
    var val_can = document.getElementById("id-can").value;
    var val_usa = document.getElementById("id-usa").value;
    var val_arg = document.getElementById("id-arg").value;

    plotDonut(val_indo, val_fr, val_can, val_usa, val_arg);
}