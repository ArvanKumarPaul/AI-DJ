song = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
leftwristY = 0;

function setup() {

  canvas = createCanvas(600,500);
  canvas.center();

  video = createCanvas(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video , modeLoaded);
  poseNet.on('pose' , gotPoses);

}

function modelLoaded() {

  console.log("poseNet is initialised!");

}

function gotPoses(results) {

  if(results.length>0) {

    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;

    console.log("right wrist X : "+rightwristX+" right wrist Y : "+rightwristY+"left wrist X : "+leftwristX+" left wrist Y : "+leftwristY)

  }

}

function preload() {

  song = loadSound("music.mp3");

}

function draw() {

  image(video,0,0,600,500);

}

function play() {

  song.play();
  song.setVolume(1);
  song.rate(1);

}

