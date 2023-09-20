function setup() {
    video = createCapture(VIDEO);
    canvas = createCanvas(640, 480);
    background("black");
    pose = ml5.poseNet(video, listo);
    pose.on("pose", respuesta);
}
function listo() {
    console.log("esta listo");
}
function respuesta(resultados) {
    if (resultados[0]) {
      console.log(resultados);
      narizX = resultados[0].pose.nose.x;
      narizY = resultados[0].pose.nose.y;
manoIzq = resultados[0].pose.leftWrist.x;
manoDer = resultados[0].pose.rightWrist.x;
distancia = manoIzq - manoDer;
    }
}
function preload() {
   portal = loadImage("https://png.pngtree.com/png-clipart/20220530/original/pngtree-dr-strange-magical-shield-spell-effect-png-image_7769869.png")    
}
var narizX = 0;
var narizY = 0;
var distancia = 0;
function draw() {
    background("black");
    var mitad = distancia/2
   image(portal, narizX-mitad, narizY-mitad, distancia, distancia); 
}