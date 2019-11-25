var cvs = document.getElementById('myCanvas');
var ctx = cvs.getContext('2d');
var p1, p2, q1, q2, x1, x2, i=0;

var array = [];




window.onclick = click;


function click(e){
    //console.log(e.clientX, e.clientY);
    if(i==0){
        p1 = e.clientX-10;
        p2 = e.clientY-10;
        i++;
        console.log("p1 = ", p1,"p2 = ",p2);
    }
    else if(i == 1){
        q1 = e.clientX-10;
        q2 = e.clientY-10;
        console.log("q1 = ", q1,"q2 = ",q2);
        i++

    }
    else{
        x1 = e.clientX;
        x2 = e.clientY;
        console.log("x1 = ", x1,"x2 = ", x2);
    }

    ctx.beginPath();
    ctx.moveTo(p1, p2);
    ctx.lineTo(q1, q2);
    ctx.lineTo(x1, x2);
    ctx.lineTo(p1, p2);
    ctx.lineWidth = '2';
    ctx.stroke();
}

function midPoint(p1, p2){
    var newPoint = (p1.x + p1.y)/2;
    
}