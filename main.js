function preload(){

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