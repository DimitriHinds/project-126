pan_song = "";
harry_song = "";
pan_song_status = "";
harry_song_status = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

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
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        scoreRightWrist =  results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
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
    pan_song_status = pan_song.isPlaying();
    harry_song_status = harry_song.isPlaying();
    fill("#FF0000");
	stroke("#FF0000");
    if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);

			harry_song.stop();

		if(pan_song_status == false)
		{
			pan_song.play();
			document.getElementById("song_name").innerHTML = "Playing - Peter Pan";
		}
	}
    if(scoreRightWrist > 0.2)
	{ 
		circle(rightWristX,rightWristY,20);

			pan_song.stop();

		if(harry_song_status == false)
		{
			harry_song.play();
			document.getElementById("song_name").innerHTML = "Playing - Harry Potter";
		}
}
}
function play()
{
	song_name.play();
	song_name.setVolume(1);
	song_name.rate(1);
}