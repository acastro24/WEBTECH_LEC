var x = document.getElementById("topic1items");
var y = document.getElementById("topic2items");
var z = document.getElementById("topic3items");
var a = document.getElementById("topic4items");
var b = document.getElementById("topic5items");
var c = document.getElementById("topic6items");
var d = document.getElementById("topic0items");
x.style.display = 'none';
y.style.display = 'none';
z.style.display = 'none';
a.style.display = 'none';
b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';

function toggleTopic1() {
    		var x = document.getElementById("topic1items");
			    if (x.style.display === 'none') {
			        x.style.display = 'block';
			    } else {
			        x.style.display = 'none';
			    }
		}
function toggleTopic2() {
	var x = document.getElementById("topic2items");
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
}
function toggleTopic3() {
	var x = document.getElementById("topic3items");
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
}
function toggleTopic4() {
	var x = document.getElementById("topic4items");
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
}
function toggleTopic5() {
	var x = document.getElementById("topic5items");
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
}
function toggleTopic6() {
	var x = document.getElementById("topic6items");
	    if (x.style.display === 'none') {
	        x.style.display = 'block';
	    } else {
	        x.style.display = 'none';
	    }
}
function toggleTopic0() {
	var x = document.getElementById("topic0items");
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