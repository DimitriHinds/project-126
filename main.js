pan_song = "";
harry_song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    harry_song = loadSound("music.mp3");
    pan_song = loadSound("music2.mp3");
    harry_song.setVolume(1);
    harry_song.rate(1);
    pan_song.setVolume(1);
    pan_song.rate(1);
}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    v = createCapture(VIDEO);
    v.size(350, 350);
    v.hide();
    harry_song.play();
    poseNet = ml5.poseNet(v, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = "+ rightWristY);
    }
}

function draw()
{
    image(v, 0, 0, 350, 350);
}