var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
 
var trgs = [];
var dim = 500;


var trg = {
    c:  "black",
    ly: canvas.height,
    lx: 0,
    ry: canvas.height,
    rx: dim,
    ty: canvas.height - (Math.sqrt(3)*dim)/2,
    tx: dim/2,
    di: dim
};
// console.log(canvas.height - (Math.sqrt(3)*dim)/2)
trgs.push(trg);
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function fractal_iteration() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for (var i=0;i<100;i++) {
      // if (trgs[i].c == "black") {
            // var trg1 = {
            //     c:  getRandomColor(),
            //     ly: (trgs[i].ly + trgs[i].ty) / 2,
            //     lx: (trgs[i].lx + trgs[i].tx) / 2,
            //     ry: (trgs[i].ry + trgs[i].ty) / 2,
            //     rx: (trgs[i].rx + trgs[i].tx) / 2,
            //     ty: trgs[i].ty + (Math.sqrt(3)*trgs[i].di)/2,
            //     tx: trgs[i].tx,
            //     di: trgs[i].di/2
            // };
            var t=trgs[0] 

            var trg2 = {
                c:  getRandomColor(),
                ly: (t.ly + t.ty) / 2,
                lx: (t.lx + t.tx) / 2,
                ry: (t.ry + t.ty) / 2,
                rx: (t.rx + t.tx) / 2,
                ty: t.ty,
                tx: t.tx,
                di: t.di/2
            };
                    
                    
                // (second one, on the left)
            var trg3 = {
                c:  getRandomColor(),
                ly: t.ly,
                lx: t.lx,
                ry: (t.ry + t.ly) / 2,
                rx: (t.rx + t.lx) / 2,
                ty: (t.ty + t.ly) / 2,
                tx: (t.tx + t.lx) / 2,
                di: t.di/2
            };
                

                // (third one, on the right)
            var trg4 = {
                c:  getRandomColor(),
                ly: (t.ly + t.ry) / 2,
                lx: (t.lx + t.rx) / 2,
                ry: t.ry,
                rx: t.rx,
                ty: (t.ty + t.ry) / 2,
                tx: (t.tx + t.rx) / 2,
                di: t.di/2
            };
            
            console.log(trgs)
            drawTrg(t)
            trgs.shift() 
            console.log(trgs)
            trgs.push(trg2,trg3,trg4);
         //  drawTrg(trg1)
            drawTrg(trg2)
            drawTrg(trg3)
            drawTrg(trg4)
            console.log(trgs)
                    
                    } // if "blac    
      // } // for trgs[i]
        // draw trgs
for (i in trgs) {
    drawTrg(trgs[i]);
 }
}




function drawTrg(t){

    ctx.beginPath();
    ctx.moveTo(t.lx, t.ly);
    ctx.lineTo(t.rx, t.ry);
    ctx.lineTo(t.tx, t.ty);
    ctx.lineTo(t.lx, t.ly);
    
    ctx.fillStyle = t.c;
    // ctx.fillStyle = 'hsl(' + color + ', 100%, 50%)';
    
    ctx.fill();
    ctx.closePath();
    
};


fractal_iteration();