function preload()
{

}

function setup()
{
 canvas=createCanvas(300,300)
 canvas.position(850,250)
 video=createCapture(VIDEO)
 video.size(300,300)
 video.position(250,250)

 poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses)
}

function draw()
{
 background("grey")
}

function modelLoaded()
{console,log("model initialized")}

function gotPoses(error, result)
{
 if(error)
 {console.log(error)}
 else
 {console.log(results)}
}
