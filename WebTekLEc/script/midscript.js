var d = document.getElementById("midtopic0items");
var x = document.getElementById("midtopic1items");
var y = document.getElementById("midtopic2items");
var z = document.getElementById("midtopic3items");
var a = document.getElementById("midtopic4items");
var b = document.getElementById("midtopic5items");
var c = document.getElementById("midtopic6items");
x.style.display = 'none';
y.style.display = 'none';
z.style.display = 'none';
a.style.display = 'none';
b.style.display = 'none';
//c.style.display = 'none';
d.style.display = 'none';

function toggleTopic(indx) {
	var x = document.getElementById("midtopic"+indx+"items");
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
