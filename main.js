noseX=0;
noseY=0;
function preload(){
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(500,500);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log("Posenet is initialized")
}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x-12;
noseY=results[0].pose.nose.y+10;
console.log("Nose x="+noseX);
console.log("Nose y="+noseY);
}
}
function draw(){
image(video, 0, 0, 500, 500);
image(mustache, noseX, noseY, 30, 30);
}
function take_snapshot(){
save('mustache.png');
}