noseX=0;
noseY=0;

function preload() {
    clown_nose =
    loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x)-15;
        console.log("nose y = " + results[0].pose.nose.y-15);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(m, noseX, noseY, 30, 20)
}

function take_snapshot(){
    save('student_name.png');
}