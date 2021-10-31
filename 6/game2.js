let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
let check = true;
let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();
let status = false;
bird.src = "bird.png"
bg.src = "nenchim.png";
fg.src = "fg.png";
pipeNorth.src = "pipeNorth.png";
pipeSouth.src = "pipeSouth.png";
let gap = 150;
let constant;
let bX = 10;
let bY = 150;
let gravity = 1;
let score = 0;
let fly = new Audio();
let scor = new Audio();

fly.src = "fly.mp3";
scor.src = "score.mp3";

document.addEventListener("click", moveUp);

function moveUp() {
    bY -= 25;
}

let pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
};

function draw() {
    if (status === true) {
        ctx.drawImage(bg, 0, 0);
        for (let i = 0; i < pipe.length; i++) {
            constant = pipeNorth.height + gap;
            ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
            ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
            pipe[i].x--;
            if (pipe[i].x === 125) {
                pipe.push({
                    x: cvs.width,
                    y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
                });
            }
            if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y + constant) || bY + bird.height >= cvs.height - fg.height) {
                check = false;
                status = false;
                alert("bạn quá gà!");
            }
            if (pipe[i].x === bird.x) {
                score++;
            }

        }
        if (check === false) {
            alert("Bạn Quá Gà")
        }
        ctx.drawImage(fg, 0, cvs.height - fg.height);
        ctx.drawImage(bird, bX, bY);
        bY += gravity;
        ctx.fillStyle = "#000";
        ctx.font = "20px Verdana";
        ctx.fillText("Score : " + score, 10, cvs.height - 20);
        requestAnimationFrame(draw);
    }
}

function clearScore() {
    score = 0;
}

function start() {
    if (status === false) {
        check = true;
        status = true;
        clearScore();
        window.load = draw();
    }
}
