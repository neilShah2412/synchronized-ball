var ball5;

var database,position

function setup(){

    database=firebase.database();

    createCanvas(500,500);
    ball5 = createSprite(250,250,10,10);
    ball5.shapeColor = "red";
    var ball5position = database.ref("ball/position");

    ball5position.on("value",readPositon);
}

function draw(){
    background("white");

    if(position!=undefined){
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}
}
function changePosition(x,y){

    database.ref("ball/position").set({x:position.x+x, y:position.y+y});


}

function readPositon(data){

position = data.val();
ball5.x=position.x;
ball5.y=position.y;


}







