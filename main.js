video = "";
status = "";

function preload(){

}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    objectName = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model is Loaded!");
    status = true; 
}

function draw(){
    image(video, 0, 0, 480, 380);
}