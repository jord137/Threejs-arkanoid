var scene, camera, renderer;
var geometry, material, mesh, floor, paddle, ball, leftWall, rightWall, topWall, bottomWall, brick, brick2, wallManagerInstance, collision, VelXhtml, VelYhtml,scoreHtml, counter;
init();
animate();


function init() {
   
    document.onkeyup = EndMove; //keyup functions
    document.onkeydown = Input; //keydown functions
    scene = new THREE.Scene(); //new instance of THREE.Scene
    var vector = new THREE.Vector3(0, 0, -10);
    //camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000); //new perspective view camera
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000; //camera's Z position
    camera.lookAt(vector);
    floor = new Floor(); //load floor into memory
    BricksArray = [];
    leftWall = new LeftWall();    //load walls into memory
    rightWall = new RightWall(); //
    topWall = new TopWall();    //
    bottomWall = new BottomWall();//
    paddle = new Paddle(); // load paddle into memory
    ball = new Ball(); //load ball into memory
    brick = new Brick();
    levels = new Levels();
    //wallManagerInstance = new WallManager();
    counter = new Counter();
    ball.speed = 10;
    //LOAD PROPERTIES
    if (levels.currentlevel != null)
    {
        levels.loadLevel(levels.currentlevel);
    }
    
    ball.LoadBall();
    paddle.loadPaddle();
    // all code below loads objects into the scene view, they are instantiated at 0,0,0 world space and then modified in their prototype function code
    scene.add(paddle);
    scene.add(ball);
    scene.add(leftWall);
    scene.add(rightWall);
    scene.add(topWall);
    scene.add(bottomWall);
    scene.add(floor);

    


   
     // the renderer WEBGL
    renderer = new THREE.WebGLRenderer();
    renderer.setSize((window.innerWidth / 1.2), (window.innerHeight / 1.2));

    document.body.appendChild(renderer.domElement);
    Setup();
}
function Setup()
{
    paddle.position.y = -450;
    ball.position.y = (paddle.position.y + 55);
    scoreHtml = document.getElementById("pScore");
    VelXhtml = document.getElementById("VelX");
    VelYhtml = document.getElementById("VelY");
    counter.setup();
}

function animate() {
    VelXhtml.innerHTML = ball.velocityX;
    VelYhtml.innerHTML = ball.velocityY;
    requestAnimationFrame(animate);
    counter.onGUI();
    for( i = 0; i < BricksArray.length; i++)
    {
        
        collision = new Collision(ball, BricksArray[i]);
        
        switch (BricksArray[i].state)
        {
            case "normal":
                BricksArray[i].health = 100;
                BricksArray[i].material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
                break;
            case "double":
                BricksArray[i].material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
                break;


        }
    }

    
    
    ball.update();
    paddle.updater();
    
    renderer.render(scene, camera);
}
