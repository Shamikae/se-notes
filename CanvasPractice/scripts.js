//console.log('hello canvas')
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// //Draw a line
// ctx.moveTo(0,0);
// ctx.lineTo(200, 100);
// ctx.stroke();

//Draw a circle
// ctx.beginPath();
// ctx.arc(300, 300, 100, 0, 2 * Math.PI);
// ctx.stroke();

ctx.font = "50px Arial";
ctx.fillStyle = "white";
ctx.fillText("Hello World", c.width/2 - 125, (c.height/2)+25)
ctx.strokeText("Hello World", c.width/2 - 125, (c.height/2)+25)