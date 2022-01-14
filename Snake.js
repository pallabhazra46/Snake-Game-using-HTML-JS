
class Snake
{
    constructor(x, y, size)
    {
        this.x = x
        this.y = y
        this.size = size
        this.tall = [{x:this.x, y:this.y}]
        this.rotateX = 0
        this.rotateY = 1
    }

    move()
    {
        var newRect;
        if(this.rotateX == 1)
        {
           newRect = {
                        x: this.tail[this.tail.length - 1].x + this.size,
                        y: this.tail[this.tail.lengtg - 1].y
                     }     
        }

        else if(this.rotateX == -1)
        {
            newRect = {
                            x: this.tail[this.tail.length - 1].x - this.size,
                            y: this.tail[this.tail.lengtg - 1].y
                    }     
        }

        else if(this.rotateY == 1)
        {
            newRect = {
                        x: this.tail[this.tail.length - 1].x,
                        y: this.tail[this.tail.lengtg - 1].y + this.size
                      }     
        }   

        else if(this.rotateY == 1)
        {
            newRect = {
                        x: this.tail[this.tail.length - 1].x,
                        y: this.tail[this.tail.lengtg - 1].y -this.size
                      }     
        }

        this.tail.shift()
        this.tail.push(newRect)

    }
}

class Apple
{
    constructor()
    {
        var isTouching;
        while(true)
        {
            isTouching = false;
            this.x = Math.floor(Math.random * canvas.width / Snake.size) * Snake.size
            this.y = Math.floor(Math.random * canvas.height / Snake.size) * Snake.size
            for(var i = 0; i < Snake.tail.length;i++)
            {
                if(this.x == Snake.tail[i].x && this.y == Snake.tail[i].y)
                {
                    isTouching = true
                }
            }
            if(!isTouching)
            {
                break;
            }
            this.color = "pink"
            this.size = Snake.size
        }
    }
}

var canvas = document.getElementById("canvas")

var Snake = new Snake();

var Apple = new Apple();

var canvasContext = canvas.getContext('2d');

window.onload = ()=>
{
    gameLoop();
}

function gameLoop()
{
    setInterval(show, 1000/25) // 15 is my fps value
}

function show()
{
    update();
    draw();
}

function show()
{
    update();
    draw();
}

function update()
{
    Snake.move()


}

function draw()
{
    createRect(0,0,canvas.width, canvas.height, "black")
    createRect(0,0, canvas.width, canvas.height)
    for(var i =0; i < Snake.tail.length; i++)
    {
        createRect(Snake.tail[i].x + 2.5, Snake.tail[i].y + 2.5,
            Snake.size -5, Snake.size -5, 'white')
    }

    canvasContext.font = "20px Arial"
    canvasContextfillStyle = "#00FF42"
    canvasContextfillText("Score : " (Snake.tail.length +1),
        canvas.width -120, 18 );
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color)
}

function createRect(X,Y,width, height, color)
{
    canvasContext.fillStyle = color
    canvasContext.fillRect(x,y, width, height)
}

window.addEventListener("keydown", (event)=>
{
    setTimeout(()=>
    {
        if(event.keyCode == 37 && Snake.rotateX != 1)
        {
            Snake.rotateX = -1
            Snake.rotateY = 0;
        }
        else if(event.keyCode == 38 && Snake.rotateY != 1)
        {
            Snake.rotateX = 0
            Snake.rotateY = -1;
        }
        else if(event.keyCode == 39 && Snake.rotateX != -1)
        {
            Snake.rotateX = 1
            Snake.rotateY = 0;
        }
        else if(event.keyCode == 40 && Snake.rotateY != -1)
        {
            Snake.rotateX = 0
            Snake.rotateY = 01;
        }
    }, 1)
})