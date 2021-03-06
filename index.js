const fs =  require("fs");
const { createCanvas, loadImage } = require("canvas");
const console = require("console");
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

const saveLayer = (_canvas) => {
    fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
    console.log("Image created");
};

const drawLayer = async () => {
    const image = await loadImage("./eye_ball.png");
    ctx.drawImage(image, 200, 400, 100, 100);
    console.log("This ran!");
    saveLayer(canvas);
};

drawLayer();