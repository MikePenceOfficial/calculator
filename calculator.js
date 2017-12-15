// JavaScript Document

// Change Display
function d(val) {
	document.getElementById("d").value=val;
	}
	
	//type numbers and operators
function v(val) {
	document.getElementById("d").value +=val;
	}
		
		//evaluate the equation
function e() {
	try{
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("why are you like this");
		}
		
	}
	function sqr(){
		// evaluate the current equation
		e();
		// get the value on the display and square root it using Math.sqrt
		var x = document.getElementById("d").value;
		var root=Math.sqrt(Number(x));
		// put the result on the display
		document.getElementById(root).value=val;
		}