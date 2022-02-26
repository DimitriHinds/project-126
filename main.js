pan_song = "";
harry_song = "";
function preload(){
    harry_song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    v = createCapture(VIDEO);
    v.size(300, 300);
    v.hide();

    //poseNet = ml5.poseNet(v, modelLoaded);
    //poseNet.on('pose', gotPoses);
}

function draw()
{
    image(v, 0, 0, 300, 300);
}