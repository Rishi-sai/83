
var lastpx, lastpy;
color = "black";
widthl = 2;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;





if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";




}





canvas.addEventListener("touchstart", my_ts);
function my_ts(e) {
    console.log("my-touchstart");

    lastpx = e.touches[0].clientX - canvas.offsetleft;
    lastpy = e.touches[0].clientY - canvas.offsetTop;






}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    console.log("my-touchmove");

    cpmx = e.touches[0].clientX - canvas.offsetleft;
    cpmy = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthl;

    ctx.moveTo(lastpx, lastpy);
    ctx.lineTo(cpmx, cpmy);
    ctx.stroke();


    lastpx = cpmx;
    lastpy = cpmy;
}

function clear() {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
