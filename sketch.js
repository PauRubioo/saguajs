
let chamarra = 0;
let playera = 0;
let pantalon = 0;
let ropainterior = 0;
let zapatos = 0;

let buttonColorc = 250;
let buttonColorp = 250;
let buttonColorpp = 250;
let buttonColorcc = 250;
let buttonColorz = 250;



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

function preload() {
    img1 = loadImage("/assets/chamarra.png");
    img2 = loadImage("/assets/playera.png");
    img3 = loadImage("/assets/pantalon.png");
    img4 = loadImage("/assets/calcetines.png");
    img5 = loadImage("/assets/zapatos.png");
}


function draw()
{
    background(220);
    textSize(80);
    fill(0);
    textFont("Times New Roman"); 

    text("s/agua", 700, 100);
    text("¿Cuántas prendas traes el día de hoy?" ,200, 400);

    noStroke();
    fill(buttonColorc);
    square(250,500,150);
    fill(buttonColorp);
    square(480,500,150); //botón
    fill(buttonColorpp);
    square(700,500,150);
    fill(buttonColorcc);
    square(950,500,150);
    fill(buttonColorz);
    square(1200,500,150);
    fill(0);
    square(250,700,150);
    fill(0);
    square(480,700,150);
    fill(0);
    square(700,700,150);
    fill(0);
    square(950,700,150);
    fill(0);
    square(1200,700,150);
    fill(0);





    image(img1,275,520,100,100);
    image(img2,505,520,100,100);
    image(img3,725,520,100,100);
    image(img4,970,520,100,100);
    image(img5,1220,520,100,100);

}

function mousePressed() {
    if (mouseX >= 250 && mouseX <= 400 && mouseY >= 500 && mouseY <= 650) {
        buttonColorc = buttonColorc === 255 ? color(0, 255, 0) : 255;
    }

    if(mouseX >= 450 && mouseX <= 625 && mouseY >= 500 && mouseY <= 650) {
        buttonColorp = buttonColorp === 255 ? color(0, 200, 0) : 255;
        
    }
    if(mouseX >= 700 && mouseX <= 850 && mouseY >= 500 && mouseY <= 650) {
        buttonColorpp = buttonColorpp === 255 ? color(0, 200, 0) : 255;
    }
    if(mouseX >= 950 && mouseX <= 1100 && mouseY >= 500 && mouseY <= 650) {
        buttonColorcc = buttonColorcc === 255 ? color(0, 200, 0) : 255;
    }
    if(mouseX >= 1200 && mouseX <= 1350 && mouseY >= 500 && mouseY <= 650) {
        buttonColorz = buttonColorz === 255 ? color(0, 200, 0) : 255;
    }

    if (buttonColorc && buttonColorp && buttonColorpp && buttonColorcc && buttonColorz) {
        console.log("4 Litros de agua");
    }
}
