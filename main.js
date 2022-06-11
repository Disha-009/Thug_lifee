righteyeX= 0;
righteyeY= 0;


 
function preload(){
    sunglasses= loadImage('https://i.postimg.cc/dQpNmvsh/1495817519-Thug-Life-Cool-Glasses-PNG-transparent.png');

    
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}

function draw(){
    image(video, 0, 0, 300, 300);
    // filter(BLUR, 3);
    image(sunglasses, righteyeX, righteyeY, 80, 95);
    
}
function modelLoaded(){
    console.log('poseNet is initialised');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        righteyeX=results[0].pose.rightEye.x-20;
        righteyeY=results[0].pose.rightEye.y-40;
       
        console.log('righteye x'+ righteyeX);
        console.log('righteye y'+ righteyeY);
       
        
    }
}


function take_snapshot(){
    save('filter_me!.png');
}
 
