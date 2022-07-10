var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  path = loadImage("path.png");
  boy = loadAnimation("Runner-1.png", "Runner-2.png");
 
}

function setup(){
  createCanvas(400,400);

pista = createSprite(200,115,10,10);
pista.addImage(path);
pista.velocityY = -4;
pista.scale=1.4;
pista.velocityY = 5;

menino = createSprite(150, 300, 50, 50);
menino.addAnimation("movement", boy);
menino.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}


function draw() {
  background(0);
  
  // mover o menino com o mouse usando mouseX
  menino.x=World.mouseX;
  edges= createEdgeSprites();
  
  //boy.collide(edges[3]);
  
  // colidir o menino com os limites invisíveis da esquerda e da direita
  menino.collide(leftBoundary);
  menino.collide(rightBoundary);
  //código para redefinir o fundo
  if(pista.y > 400 ){
    pista.y = 60
  }
  
  drawSprites();
}
