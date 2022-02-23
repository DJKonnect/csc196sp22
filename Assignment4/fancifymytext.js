

function bigger(){
	var text = document.getElementById("Text1");
	text.style.fontSize = "24pt";
}

function fancify(){
	var set = document.getElementById("fancy");
	var boringSet = document.getElementById("boring");
	var text = document.getElementById("Text1");

	if(set.checked){
		text.style.fontWeight = "bold";
		text.style.color = "blue";
		text.style.textDecoration = "underline";
	}
	else if(boring.checked){
		boringIt();
	}
}

function boringIt(){
	var text = document.getElementById("Text1");
	text.style.fontWeight = "normal";
	text.style.color = "black";
	text.style.textDecoration = "none";

}

function moo(){
	var text = document.getElementById("Text1");
	text.value = text.value.toUpperCase();
	text.value = text.value.split(".").join("-Moo");
}

