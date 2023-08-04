new WOW().init();

/*image zoom start*/

let zoomIn = document.getElementById("zoomIn");

let zoomOut = document.getElementById("zoomOut");

let imgId = document.getElementById("imgId");



zoomIn.onclick = function(){
    imgId.classList.add("imgZoomIn");
    zoomIn.classList.add("d-none");
    zoomOut.classList.remove("d-none");
}

zoomOut.onclick = function(){
    imgId.classList.remove("imgZoomIn");
    zoomIn.classList.remove("d-none");
    zoomOut.classList.add("d-none");
    
}

/*image zoom end*/
