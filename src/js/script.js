let btn_spec_open1 = document.getElementById("open_spec_1");

let btn_spec_close1 = document.getElementById("close_spec_1");

btn_spec_open1.onclick = function(){
	document.getElementById("spec_1").style = "left: 0%; opacity: 1";
};

btn_spec_close1.onclick = function(){
	document.getElementById("spec_1").style = "right: -100%; opacity: 0";
}

// =========================================================

let btn_spec_open2 = document.getElementById("open_spec_2");

let btn_spec_close2 = document.getElementById("close_spec_2");


btn_spec_open2.onclick = function(){
	document.getElementById("spec_2").style = "left: 0; opacity: 1";
};

btn_spec_close2.onclick = function(){
	document.getElementById("spec_2").style = "right: -100%; opacity: 0";
}

// =========================================================

let btn_spec_open3 = document.getElementById("open_spec_3");

let btn_spec_close3 = document.getElementById("close_spec_3");


btn_spec_open3.onclick = function(){
	document.getElementById("spec_3").style = "left: 0; opacity: 1";
};

btn_spec_close3.onclick = function(){
	document.getElementById("spec_3").style = "right: -100%; opacity: 0";
}

// Animação menu active

