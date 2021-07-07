song1 = "";
song2 = "";
song1_status = "";
song2_status = "";
rightwristx = 0;
rightwristy = 0;
leftwristx = 0;
leftwristy = 0;
scorerightwrist = 0;
scoreleftwrist = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('poseNet is done');
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}



