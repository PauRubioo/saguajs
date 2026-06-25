var ch = false;
var pl = false;
var pa = false;
var ca = false;
var za = false;
var cin = false;
var acc = false;
var go = false;
var le = false;
var mo = false;


let litros = 0;
let mensaje = "";
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;

function setup() 
{
    createCanvas(1800,1200);
    background(220);
    
}



function draw()
{
    background(46, 218, 236);
    textSize(80);
    fill(0);
    textFont("Times New Roman"); 

    text("s/agua", 700, 100);
    text("¿Cuántas prendas traes el día de hoy?" ,200, 400);
    
    if (ch){
        fill(46, 218, 236);    
    }else{
        fill(255);
    }
    noStroke();
    square(250,500,150);

    if (pl){
        fill(46, 218, 236);
    }else{
        fill(255);
    }
    noStroke();
    square(480,500,150);
    
    if (pa){
        fill(46, 218, 236);
    }else{
        fill(255);
    }
    noStroke();
    square(700,500,150);

    if (ca){
        fill(46, 218, 236);
    }else{
        fill(255);
    }
    noStroke();
    square(950,500,150);

    if (za){
        fill(46, 218, 236);
    }else{
        fill(255);
    }
    noStroke();
    square(1200,500,150);

    if (cin){
        fill(46, 218, 236);
    }else{
        fill(255);
    }
    noStroke();
    square(250, 700,150);

    if (acc){
        fill(46, 218, 236);
    }else{
        fill(255);
    }
    noStroke();
    square(480,700,150);

    if(go){
        fill(46, 218, 236);
    }else{
        fill(255);
    }
    noStroke();
    square(700,700,150);

    if(le){
        fill(46, 218, 236);
    }else{
        fill(255);
    }
    noStroke();
    square(950,700,150);

    if(mo){
        fill(46, 218, 236);
    }else{
        fill(255);
    }
    noStroke();
    square(1200,700,150);
    
    if(ch) litros += 15000;
    if(pl) litros += 2700;
    if(pa) litros += 10000;
    if(ca) litros += 2200;
    if(za) litros += 15000;
    if(cin) litros += 2200;
    if(acc) litros += 50;
    if(go) litros += 800;
    if(le) litros += 500;
    if(mo) litros += 10000;
    textSize(40);
    fill(0);
    textFont("Times New Roman"); 
    text("Litros de agua: " + litros, 650, 1000);
    litros = 0;
    
    




    image(img1,275,520,100,100);
    image(img2,505,520,100,100);
    image(img3,725,520,100,100);
    image(img4,970,520,100,100);
    image(img5,1220,520,100,100);
    image(img6,272,720,110,100);
    image(img7,505,720,100,100);
    image(img8,725,720,100,100);
    image(img9,980,720,100,100);
    image(img10,1228,720,100,100);

}

function mousePressed() {
    if(mouseX >= 250 && mouseX <= 400 && mouseY >= 500 && mouseY <= 650){
        if(ch){
            ch = false;

        }else{
            ch = true;

    }
}

if(mouseX >= 480 && mouseX <= 630 && mouseY >= 500 && mouseY <= 650){
    if(pl){
        pl = false;
    }else{
        pl = true;
    }
}
if(mouseX >= 700 && mouseX <= 850 && mouseY >= 500 && mouseY <= 650){
    if(pa){
        pa = false;
    }else{
        pa = true;
    }
    }
if(mouseX >= 950 && mouseX <= 1100 && mouseY >= 500 && mouseY <= 650){
        if(ca){
            ca = false;
        }else{
            ca = true;
        }
}

if(mouseX >= 1200 && mouseX <= 1350 && mouseY >= 500 && mouseY <= 650){
    if(za){
        za = false;
    }else{
        za = true;
    }
}

if(mouseX >= 250 && mouseX <= 400 && mouseY >= 700 && mouseY <= 850){
    if(cin){
        cin = false;
    }else{
        cin = true;
    }
}
if(mouseX >= 480 && mouseX <= 630 && mouseY >= 700 && mouseY <= 850){
    if(acc){
        acc = false;
    }else{
        acc = true;
    }
}

if(mouseX >= 700 && mouseX <= 850 && mouseY >= 700 && mouseY <= 850){
    if(go){
        go = false;
    }else{
        go = true;
    }
}

if(mouseX >= 950 && mouseX <= 1100 && mouseY >= 700 && mouseY <= 850){
    if(le){
        le = false;
    }else{
        le = true;
    }
}

if(mouseX >= 1200 && mouseX <= 1350 && mouseY >= 700 && mouseY <= 850){
    if(mo){
        mo = false;
    }else{
        mo = true;
    }
}
}



function preload() {
    img1 = loadImage("/assets/chamarra.png");
    img2 = loadImage("/assets/playera.png");
    img3 = loadImage("/assets/pantalon.png");
    img4 = loadImage("/assets/calcetines.png");
    img5 = loadImage("/assets/zapatos.png");
    img6 = loadImage("/assets/cinturon.png");
    img7 = loadImage("/assets/accesorios.png");
    img8 = loadImage("/assets/gorra.png");
    img9 = loadImage("/assets/lentes.png");
    img10 = loadImage("/assets/mochila.png");
}
