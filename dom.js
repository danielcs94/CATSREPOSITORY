// CSS: # -> identificador; . -> class
//hecho por sebastian el parcero
let tagBody = document.getElementsByTagName("tagBody");

let tagMain = document.getElementsByTagName("tagMain");

let tagUl = document.getElementsByTagName("tagUl"); 

let tagOl = document.getElementsByTagName("tagOl");

let tagLike = document.getElementById("tagLike")

let mainHeader = document.getElementById("mainHeader");

let thunder = document.getElementsByClassName("thunder");

let a = document.getElementsByTagName("tagA");

console.log("Body: ", body);

console.log("MainHeader: ", mainHeader);

console.log("Thunder: ", thunder);

tagBody[0].style.backgroundColor = "lightcyan";
tagMain[0].style.paddingTop = "1rem";
tagMain[0].style.paddingLeft = "1rem";
tagUl[0].style.paddingLeft = "2rem";
tagOl[0].style.paddingLeft = "2rem";
tagLike[0].style.color = "green";
tagA[0].style = "color: plum; font-style: italic;"
