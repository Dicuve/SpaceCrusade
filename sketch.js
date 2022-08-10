var canvas;
var bimg;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15;
var b1b, b2b, b3b, b4b, b5b, b6b, b7b, b8b, b9b, b10b, b11b, b12b, b13b, b14b, b15b;
var naveA, naveB;
var balaA, balaB, balaAGroup, balaBGroup;
var naveImg;
var fondo,fondoImg;
var bala, balaAImg, balaBImg;
var pantallafinal, pantallafinalImg1, pantallafinalImg2;

var gameState = 0;

var b1c = 0;
var b2c = 0;
var b3c = 0;
var b4c = 0;
var b5c = 0;
var b6c = 0;
var b7c = 0;
var b8c = 0;
var b9c = 0;
var b10c = 0;
var b11c = 0;
var b12c = 0;
var b13c = 0;
var b14c = 0;
var b15c = 0;

var b1bc = 0;
var b2bc = 0;
var b3bc = 0;
var b4bc = 0;
var b5bc = 0;
var b6bc = 0;
var b7bc = 0;
var b8bc = 0;
var b9bc = 0;
var b10bc = 0;
var b11bc = 0;
var b13bc = 0;
var b14bc = 0;
var b15bc = 0;
var b12bc = 0;

var ganador = 0;

function preload(){
  
  barricadaimg = loadImage ("./image/bimg.png");
  naveAImg=loadImage("./image/naveA_img_r.png");
  naveBImg=loadImage("./image/naveB_img_r.png");
  fondoImg=loadImage("./image/fimg.jpg");
  bimg = loadImage("./image/bimgb.png");
  bimgA1 = loadImage ("./image/bimgA1.png");
  bimgA2 = loadImage ("./image/bimgA2.png");
  bimgB1 = loadImage("./image/bimgB1.png");
  bimgB2 = loadImage ("./image/bimgB2.png");
  balaAImg = loadImage ("./image/balaAImg (2).png");
  balaBImg = loadImage ("./image/balaBImg (2).png");
  pantallafinalImg1 = loadImage ("./image/VictoriaRepublica.jpg");
  pantallafinalImg2 = loadImage ("./image/VictoriaImperio.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //NAVE REPUBLICA

  // Primera barrera nave Republica

  b1 = createSprite (250, 370, 150, 125);
  b1.addImage("barricada",barricadaimg);
  b1.scale = 0.3;
  b1.setCollider("rectangle",0,0,30,280);
  //b1.debug=true;

  b2 = createSprite (230, 250, 150, 125);
  b2.addImage("b1",bimgA1);
  b2.setCollider("rectangle",0,0,30,280,-45);
  //b2.debug=true;
  b2.scale = 0.3;

  b3 = createSprite (230, 490, 150, 125);
  b3.addImage("b2",bimgA2);
  b3.setCollider("rectangle",0,0,30,280,45);
  //b3.debug=true;
  b3.scale = 0.3;

  //Segunda barrera nave Republica

  b4 = createSprite (350, 370, 150, 125);
  b4.addImage("barricada",barricadaimg);
  b4.setCollider("rectangle",0,0,30,280);
  //b4.debug=true;
  b4.scale = 0.3;

  b5 = createSprite (330, 230, 150, 125);
  b5.addImage("b1",bimgA1);
  b5.setCollider("rectangle",0,0,30,280,-45);
  //b5.debug=true;
  b5.scale = 0.3;

  b6 = createSprite (330, 490, 150, 125);
  b6.addImage("b2",bimgA2);
  b6.setCollider("rectangle",0,0,30,280,45);
  //b6.debug=true;
  b6.scale = 0.3;

  b7 = createSprite (230, 130, 150, 125);
  b7.addImage("b1",bimgA1);
  b7.setCollider("rectangle",0,0,30,280,-45);
  //b7.debug=true;
  b7.scale = 0.3;
  
  b8 = createSprite (230, 590, 150, 125);
  b8.addImage("b2",bimgA2);
  b8.setCollider("rectangle",0,0,30,280,45);
  //b8.debug=true;
  b8.scale = 0.3;

  // Tercera barrera nave Republica

  b9 = createSprite (450, 370, 150, 125);
  b9.addImage("barricada",barricadaimg);
  b9.setCollider("rectangle",0,0,30,280);
  //b9.debug=true;
  b9.scale = 0.3;

  b10 = createSprite (430, 230, 150, 125);
  b10.addImage("b1",bimgA1);
  b10.setCollider("rectangle",0,0,30,280,-45);
  //b10.debug=true;
  b10.scale = 0.3;

  b11 = createSprite (430, 490, 150, 125);
  b11.addImage("b2",bimgA2);
  b11.setCollider("rectangle",0,0,30,280,45);
  //b11.debug=true;
  b11.scale = 0.3;

  b12 = createSprite (340, 130, 150, 125);
  b12.addImage("b1",bimgA1);
  b12.setCollider("rectangle",0,0,30,280,-45);
  //b12.debug=true;
  b12.scale = 0.3;
  
  b13 = createSprite (340, 590, 150, 125);
  b13.addImage("b2",bimgA2);
  b13.setCollider("rectangle",0,0,30,280,45);
  //b13.debug=true;
  b13.scale = 0.3;

  b14 = createSprite (260, 60, 150, 125);
  b14.addImage("b1",bimgA1);
  b14.setCollider("rectangle",0,0,30,280,-45);
  //b14.debug=true;
  b14.scale = 0.3;
  
  b15 = createSprite (260, 660, 150, 125);
  b15.addImage("b2",bimgA2);
  b15.setCollider("rectangle",0,0,30,280,45);
  //b15.debug=true;
  b15.scale = 0.3;

  //NAVE IMPERIAL 

  // PRIMERA BARRICADA
  b1b = createSprite (windowWidth - 250, 370, 150, 125);
  b1b.addImage("b",bimg);
  b1b.setCollider("rectangle",0,0,30,280);
  //b1b.debug=true;
  b1b.scale = 0.3;

  b2b = createSprite (windowWidth - 230, 250, 150, 125);
  b2b.addImage("b1b",bimgB1);
  b2b.setCollider("rectangle",0,0,30,280,45);
  //b2b.debug=true;
  b2b.scale = 0.3;

  b3b = createSprite (windowWidth - 230, 490, 150, 125);
  b3b.addImage("b2b",bimgB2);
  b3b.setCollider("rectangle",0,0,30,280,-45);
  //b3b.debug=true;
  b3b.scale = 0.3;

  //Segunda barrera nave Imperial

  b4b = createSprite (windowWidth - 350, 370, 150, 125);
  b4b.addImage("b",bimg);
  b4b.setCollider("rectangle",0,0,30,280);
  //b4b.debug=true;
  b4b.scale = 0.3;

  b5b = createSprite (windowWidth - 330, 230, 150, 125);
  b5b.addImage("b1b",bimgB1);
  b5b.setCollider("rectangle",0,0,30,280,45);
  //b5b.debug=true;
  b5b.scale = 0.3;

  b6b = createSprite (windowWidth - 330, 490, 150, 125);
  b6b.addImage("b2b",bimgB2);
  b6b.setCollider("rectangle",0,0,30,280,-45);
  //b6b.debug=true;
  b6b.scale = 0.3;

  b7b = createSprite (windowWidth - 230, 130, 150, 125);
  b7b.addImage("b1b",bimgB1);
  b7b.setCollider("rectangle",0,0,30,280,45);
  //b7b.debug=true;
  b7b.scale = 0.3;
  
  b8b = createSprite (windowWidth - 230, 590, 150, 125);
  b8b.addImage("b2b",bimgB2);
  b8b.setCollider("rectangle",0,0,30,280,-45);
  //b8b.debug=true;
  b8b.scale = 0.3;

  // Tercera barrera nave Imperial

  b9b = createSprite (windowWidth - 450, 370, 150, 125);
  b9b.addImage("b",bimg);
  b9b.setCollider("rectangle",0,0,30,280);
  //b9b.debug=true;
  b9b.scale = 0.3;

  b10b = createSprite (windowWidth - 430, 230, 150, 125);
  b10b.addImage("b1b",bimgB1);
  b10b.setCollider("rectangle",0,0,30,280,45);
  //b10b.debug=true;
  b10b.scale = 0.3;

  b11b = createSprite (windowWidth - 430, 490, 150, 125);
  b11b.addImage("b2b",bimgB2);
  b11b.setCollider("rectangle",0,0,30,280,-45);
  //b11b.debug=true;
  b11b.scale = 0.3;

  b12b = createSprite (windowWidth - 340, 130, 150, 125);
  b12b.addImage("b1b",bimgB1);
  b12b.setCollider("rectangle",0,0,30,280,45);
  //b12b.debug=true;
  b12b.scale = 0.3;
  
  b13b = createSprite (windowWidth - 340, 590, 150, 125);
  b13b.addImage("b2b",bimgB2);
  b13b.setCollider("rectangle",0,0,30,280,-45);
  //b13b.debug=true;
  b13b.scale = 0.3;

  b14b = createSprite (windowWidth - 260, 60, 150, 125);
  b14b.addImage("b1b",bimgB1);
  b14b.setCollider("rectangle",0,0,30,280,45);
  //b14b.debug=true;
  b14b.scale = 0.3;
  
  b15b = createSprite (windowWidth - 260, 660, 150, 125);
  b15b.addImage("b2b",bimgB2);
  b15b.setCollider("rectangle",0,0,30,280,-45);
  //b15b.debug=true;
  b15b.scale = 0.3;
  
  naveA=createSprite(100,windowHeight/2,100,100);
  naveA.addImage("naveA",naveAImg);
  naveA.setCollider("rectangle",0,0,630,330)
  //naveA.debug = true;
  naveA.scale=0.2;

  naveB=createSprite(windowWidth-100,windowHeight/2,100,100);
  naveB.addImage("naveB",naveBImg);
  naveB.setCollider("rectangle",0,0,630,330)
  //naveB.debug = true;
  naveB.scale=0.2;

  balaAGroup = new Group();
  balaBGroup = new Group();

  pantallafinal = createSprite (windowWidth/2,windowHeight/2,1,1);
  pantallafinal.scale = 1.2;
  pantallafinal.visible = false;


}

function draw() {
  background(fondoImg);

  //MOVIMIENTO NAVE REPUBLICA
  if (keyIsDown(UP_ARROW))
    naveB.y = naveB.y-3;
  if (keyIsDown(DOWN_ARROW))
    naveB.y = naveB.y+3;
  
// MOVIMIENTO NAVE IMPERIAL
  if (keyDown("w")){
    naveA.y --;
    naveA.y --;
    naveA.y --;
  }
  if (keyDown("s")){
    naveA.y ++;
    naveA.y ++;
    naveA.y ++;
}

//PRIMERA BARRICADA REPUBLICA

if (balaBGroup.isTouching(b1)){
  b1c = b1c +1;
  balaBGroup.destroyEach();
  if(b1c===3)
  b1.destroy();
}
if (balaBGroup.isTouching(b2)){
  b2c = b2c +1;
  balaBGroup.destroyEach();
  if(b2c===3)
  b2.destroy();
}
if (balaBGroup.isTouching(b3)){
  b3c = b3c +1;
  balaBGroup.destroyEach();
  if(b3c===3)
  b3.destroy();
}

//SEGUNDA BARRICADA REPUBLICA

if (balaBGroup.isTouching(b4)){
  b4c = b4c +1;
  balaBGroup.destroyEach();
  if(b4c===2)
  b4.destroy();
}
if (balaBGroup.isTouching(b5)){
  b5c = b5c +1;
  balaBGroup.destroyEach();
  if(b5c===2)
  b5.destroy();
}
if (balaBGroup.isTouching(b6)){
  b6c = b6c +1;
  balaBGroup.destroyEach();
  if(b6c===2)
  b6.destroy();
}
if (balaBGroup.isTouching(b7)){
  b7c = b7c +1;
  balaBGroup.destroyEach();
  if(b7c===2)
  b7.destroy();
}
if (balaBGroup.isTouching(b8)){
  b8c = b8c +1;
  balaBGroup.destroyEach();
  if(b8c===2)
  b8.destroy();
}

// TERCERA BARRICADA REPUBLICA

if (balaBGroup.isTouching(b9)){
  balaBGroup.destroyEach();
  b9.destroy();
}
if (balaBGroup.isTouching(b10)){
  balaBGroup.destroyEach();
  b10.destroy();
}
if (balaBGroup.isTouching(b11)){
  balaBGroup.destroyEach();
  b11.destroy();
}
if (balaBGroup.isTouching(b12)){
  balaBGroup.destroyEach();
  b12.destroy();
}
if (balaBGroup.isTouching(b13)){
  balaBGroup.destroyEach();
  b13.destroy();
}
if (balaBGroup.isTouching(b14)){
  balaBGroup.destroyEach();
  b14.destroy();
}
if (balaBGroup.isTouching(b15)){
  balaBGroup.destroyEach();
  b15.destroy();
}

//PRIMERA BARRICADA IMPERIO

if (balaAGroup.isTouching(b1b)){
  b1bc = b1bc +1;
  balaAGroup.destroyEach();
  if(b1bc===3)
  b1b.destroy();
}
if (balaAGroup.isTouching(b2b)){
  b2bc = b2bc +1;
  balaAGroup.destroyEach();
  if(b2bc===3)
  b2b.destroy();
}
if (balaAGroup.isTouching(b3b)){
  b3bc = b3bc +1;
  balaAGroup.destroyEach();
  if(b3bc===3)
  b3b.destroy();
}

// SEGUNDA BARRICADA IMPERIO

if (balaAGroup.isTouching(b4b)){
  b4bc = b4bc +1;
  balaAGroup.destroyEach();
  if(b4bc===2)
  b4b.destroy();
}
if (balaAGroup.isTouching(b5b)){
  b5bc = b5bc +1;
  balaAGroup.destroyEach();
  if(b5bc===2)
  b5b.destroy();
}
if (balaAGroup.isTouching(b6b)){
  b6bc = b6bc +1;
  balaAGroup.destroyEach();
  if(b6bc===2)
  b6b.destroy();
}
if (balaAGroup.isTouching(b7b)){
  b7bc = b7bc +1;
  balaAGroup.destroyEach();
  if(b7bc===2)
  b7b.destroy();
}
if (balaAGroup.isTouching(b8b)){
  b8bc = b8bc +1;
  balaAGroup.destroyEach();
  if(b8bc===2)
  b8b.destroy();
}

// TERCERA BARRERA IMPERAL

if (balaAGroup.isTouching(b9b)){
  balaAGroup.destroyEach();
  b9b.destroy();
}
if (balaAGroup.isTouching(b10b)){
  balaAGroup.destroyEach();
  b10b.destroy();
}
if (balaAGroup.isTouching(b11b)){
  balaAGroup.destroyEach();
  b11b.destroy();
}
if (balaAGroup.isTouching(b12b)){
  balaAGroup.destroyEach();
  b12b.destroy();
}
if (balaAGroup.isTouching(b13b)){
  balaAGroup.destroyEach();
  b13b.destroy();
}
if (balaAGroup.isTouching(b14b)){
  balaAGroup.destroyEach();
  b14b.destroy();
}
if (balaAGroup.isTouching(b15b)){
  balaAGroup.destroyEach();
  b15b.destroy();
}

if (balaAGroup.isTouching(naveB)){
  naveB.destroy();
  pantallafinal.addImage ("VR",pantallafinalImg1);
  pantallafinal.visible = true;
  pantallafinal.scale = 0.88;
  balaAGroup.destroyEach();
  balaBGroup.destroyEach();
  gameState = 1;
}


if (balaBGroup.isTouching(naveA)){
  naveA.destroy();
  pantallafinal.addImage ("VI",pantallafinalImg2);
  pantallafinal.visible = true;
  balaAGroup.destroyEach();
  balaBGroup.destroyEach();
  gameState = 1;
}

if (gameState === 0){
  createbalaA();
  createbalaB();
}

drawSprites();
}

function createbalaB() {
  if ( frameCount % 120 === 0){
    balaB= createSprite(750,600,100,100);
  balaB.addImage(balaBImg);
  balaB.x =naveB.x;
  balaB.y = naveB.y;
  balaB.scale = 0.5;
  balaB.lifetime = 250;
  balaB.velocityX = -7;
  balaB.setCollider("rectangle",-55,10,110,20)
  //balaB.debug=true;
  balaBGroup.add(balaB);
  }
}

function createbalaA() {
  if ( frameCount % 120 === 0){
  balaA= createSprite(naveA.x,naveA.Y,30,30);
  balaA.addImage(balaAImg);
  balaA.x =naveA.x;
  balaA.y = naveA.y;
  balaA.velocityX = 7;
  balaA.scale = 0.5;
  balaA.lifetime = 250;
  balaA.setCollider("rectangle",-75,-10,110,20)
  //balaA.debug = true;
  balaAGroup.add(balaA);
  }
}

 /* function collisionN1 (n1,n2){
      if (n1.isTouching(n2)){
        n2.destroy();
      }
  }
  function collisionN2 (n1,n2){
    if (n1.isTouching(n2)){
      n2.destroy();
    }
}
function collisionN3 (n1,n2){
  var control = 0;
  if (n1.isTouching(n2)){
    control= control +1;
    if (control ===27){
      n2.destroy();
      balaBGroup.destroyEach();
    }
  }
  console.log(control);
}*/







  /* var b = n1.y - n2.y;
      var a = n1.height/2 + n2.height/2;
    
      var c = n1.x - n2.x;
      var d = n1.width/2 + n2.width/2;
    
      var e = n2.y - n1.y;
      var f = n1.height/2 + n2.height/2;
    
      var g = n2.x - n1.x;
      var h = n1.width/2 + n2.width/2;
      
      if  ( b < a && c < d && e < f && g < h){
       
      }*/