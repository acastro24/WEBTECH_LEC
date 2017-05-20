var d = document.getElementById("fintopic0items");
var x = document.getElementById("fintopic1items");
var y = document.getElementById("fintopic2items");
var z = document.getElementById("fintopic3items");
var a = document.getElementById("fintopic4items");
var b = document.getElementById("fintopic5items");
var c = document.getElementById("fintopic6items");
var e = document.getElementById("fintopic7items");
var f = document.getElementById("fintopic8items");
var g = document.getElementById("fintopic9items");
var h = document.getElementById("fintopic10items");
var i = document.getElementById("fintopic11items");
var j = document.getElementById("fintopic12items");
//j.style.display = 'none';
//i.style.display = 'none';
//h.style.display = 'none';
//g.style.display = 'none';
//f.style.display = 'none';
//e.style.display = 'none';
x.style.display = 'none';
y.style.display = 'none';
z.style.display = 'none';
a.style.display = 'none';
b.style.display = 'none';
//c.style.display = 'none';
d.style.display = 'none';

function toggleTopic(indx) {
	var x = document.getElementById("fintopic"+indx+"items");
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
}
function toggleDet(indx) {
	var x = document.getElementsByClassName("itemdetails")[indx];
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
}
function toggle(displayState){
    var elements = document.getElementsByClassName("itemdetails");

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}


toggle('none');
