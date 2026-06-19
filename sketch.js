
let chamarra = 0;
let playera = 0;
let pantalon = 0;
let ropainterior = 0;
let zapatos = 0;

let buttonColor = 250;
let buttonColoru = 250;
let buttonColora = 250;
let buttonColore = 250;

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
    fill(buttonColor);
    square(200,500,150);
    fill(buttonColoru);
    square(400,500,150); //botón
    fill(buttonColora);
    square(600,500,150);
    fill(buttonColore);
    square(800,500,150);


    image(img1,230,520,100,100);
    image(img2,420,520,100,100);
    image(img3,600,520,100,100);
    image(img4,800,520,100,100);
    image(img5,1100,520,100,100);

}

function mousePressed() {
    if (mouseX >= 200 && mouseX <= 350 && mouseY >= 500 && mouseY <= 650) {
        buttonColor = buttonColor === 255 ? color(0, 200, 0) : 255;
    }

    if(mouseX >= 400 && mouseX <= 550 && mouseY >= 500 && mouseY <= 650) {
        buttonColoru = buttonColoru === 255 ? color(0, 200, 0) : 255;
        
    }
    if(mouseX >= 600 && mouseX <= 750 && mouseY >= 500 && mouseY <= 650) {
        buttonColora = buttonColora === 255 ? color(0, 200, 0) : 255;
    }
    if(mouseX >= 800 && mouseX <= 950 && mouseY >= 500 && mouseY <= 650) {
        buttonColore = buttonColore === 255 ? color(0, 200, 0) : 255;
    }
}
