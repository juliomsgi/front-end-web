var val1 = 3;
var val2 = 8;
var myName = "Julio";

document.getElementById("my-btn").addEventListener("click", function() {
    myName = "Masengi";
    myFunction(myName, val1, val2);
});

function myFunction(name, a, b) {
    name = "Joseph Victor";
    var value = a * b;
    var join = "Name: "+name+" ("+value+")";
    document.getElementById("value-demo").innerHTML = join;
}