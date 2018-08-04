var i=0;
var image = [];
image[0] = 'img/1.jpg';
image[1] = 'img/2.jpg';
image[2] = 'img/3.jpg';
var time =1000;
function chng(){
    document.slide.src =image[i];
    if(i < image.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("chng()",time);
}
window.onload = chng;
