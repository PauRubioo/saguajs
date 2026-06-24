
var ch = false;
var pl = false;
var pa = false;
var ca = false;
var za = false;



let litros = 0;
let mensaje = "";
let img1;
let img2;
let img3;
let img4;
let img5;

function setup() 
{
    createCanvas(1800,1000);
    background(220);
    
}



function draw()
{
    background(240);
    textSize(80);
    fill(0);
    textFont("Times New Roman"); 

    text("s/agua", 700, 100);
    text("¿Cuántas prendas traes el día de hoy?" ,200, 400);
    
    if (ch){
        fill(39,245,49);    
    }else{
        fill(255);
    }
    noStroke();
    square(250,500,150);

    if (pl){
        fill(39,245,49);
    }else{
        fill(255);
    }
    noStroke();
    square(480,500,150);
    
    if (pa){
        fill(39,245,49);
    }else{
        fill(255);
    }
    noStroke();
    square(700,500,150);

    if (ca){
        fill(39,245,49);
    }else{
        fill(255);
    }
    noStroke();
    square(950,500,150);

    if (za){
        fill(39,245,49);
    }else{
        fill(255);
    }
    noStroke();
    square(1200,500,150);
    
    if(ch) litros += 10;
    if(pl) litros += 10;
    if(pa) litros += 10;
    if(ca) litros += 10;
    if(za) litros += 10;
    textSize(40);
    fill(0);
    textFont("Times New Roman"); 
    text("Litros de agua: " + litros, 650, 700);
    litros = 0;
    






    image(img1,275,520,100,100);
    image(img2,505,520,100,100);
    image(img3,725,520,100,100);
    image(img4,970,520,100,100);
    image(img5,1220,520,100,100);

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

}



function preload() {
    img1 = loadImage("/assets/chamarra.png");
    img2 = loadImage("/assets/playera.png");
    img3 = loadImage("/assets/pantalon.png");
    img4 = loadImage("/assets/calcetines.png");
    img5 = loadImage("/assets/zapatos.png");
}