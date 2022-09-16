// prepare faces variables
get_face1 = document.getElementsByClassName("face1");
get_face2 = document.getElementsByClassName("face2");
get_face3 = document.getElementsByClassName("face3");
get_face4 = document.getElementsByClassName("face4");
get_face5 = document.getElementsByClassName("face5");
get_face6 = document.getElementsByClassName("face6");

//prepare icons variables
get_js_icon = document.getElementsByClassName("js_icon");
get_css_icon = document.getElementsByClassName("css_icon");
get_html_icon = document.getElementsByClassName("html_icon");

const pics = [get_js_icon.src, get_css_icon.src, get_html_icon.src];
//Starting game

get_face1[0].addEventListener("click", flip1);
get_face2[0].addEventListener("click", flip2);
get_face3[0].addEventListener("click", flip3);
get_face4[0].addEventListener("click", flip4);
get_face5[0].addEventListener("click", flip5);
get_face6[0].addEventListener("click", flip6);





//Flipping cards
function flip1() {

  get_face1[0].style.display = "none";
  get_js_icon[0].style.display = "inline";

}


function flip2() {

  get_face2[0].style.display = "none";
  get_html_icon[0].style.display = "inline";

}


function flip3() {
  get_face3[0].style.display = "none";
  get_css_icon[0].style.display = "inline";
}





function flip4() {

  get_face4[0].style.display = "none";
  get_css_icon[0].style.display = "inline";
}


function flip5() {

  get_face4[0].style.display = "none";
  get_html_icon[0].style.display = "inline";

}

function flip6() {

  get_face6[0].style.display = "none";
  get_js_icon[0].style.display = "inline";

}
