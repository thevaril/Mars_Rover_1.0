canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
rover_width = 100
rover_height = 90

rover_x = 10
rover_y = 10

rover_image = "rover.png"

nasa_mars_img = [
    "NASA image 1.jpeg",
    "NASA image 2.jpeg",
    "NASA IMAGE 3.jpeg",
    "NASA image 4.jpeg",
    "NASA image 5.jpeg",
    "NASA image 6.jpeg",
]

random_number = Math.floor(Math.random() * 6 )
background_image = nasa_mars_img[random_number]

function plus()
{

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground()

{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height )
}

function uploadRover()

{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height )
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{

    keyPressed = e.keyCode;
    console.log(keyPressed)

    if (keyPressed == '38')
    {
     up();
    console.log("up")    
    }
    if (keyPressed == '40')
    {
     down();
    console.log("down")    
    }
    if (keyPressed == '37')
    {
     left();
    console.log("left")    
    }
    if (keyPressed == '39')
    {
     right();
    console.log("right")    
    }

}

function up()
{
    if(rover_y >=0 )
    rover_y -=10
    console.log ("When The Up Arrow Is Pressed" + rover_x + " - " +rover_y)
    uploadBackground()
    uploadRover()

}

function down()
{
    if(rover_y <=500 )
    rover_y +=10
    console.log ("When The Down Arrow Is Pressed" + rover_x + " | y = " +rover_y)
    uploadBackground()
    uploadRover()

}

function left()
{
    if(rover_x >=0)
    rover_x -=10
    console.log ("When The Left Arrow Is Pressed" + rover_x + " | y = " +rover_y)
    uploadBackground()
    uploadRover()

}

function right()
{
    if(rover_x <=800)
    rover_x +=10
    console.log ("When The Right Arrow Is Pressed" + rover_x + " | y = " +rover_y)
    uploadBackground()
    uploadRover()

}

