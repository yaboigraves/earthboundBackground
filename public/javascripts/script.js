// var img;

let img;
let testFrameCounter = 0;

function preload() {
  img = loadImage("/javascripts/bf4.png");
}
function setup() {
  createCanvas(100, 100);
  image(img, 0, 0, 100, 100);
  frameRate(60);

  //   let c = get(50, 90);
  //   fill(c);
  //   noStroke();
  //   rect(25, 25, 50, 50);
}

function draw() {
  //get the vars we need to calculate the offset
  let time = second();
  testFrameCounter++;
  //amplitude, kinda guessin here
  let A = 1.4;
  //frequence, also guessting
  let F = 1;

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let pixelToSwap = get(i, j);
      let offset = A * sin(F * j + (testFrameCounter % 60));
      let pixelSwapping = get(i + offset, j);

      //   set(i, j, pixelSwapping);
      //   set(i, j - offset, pixelToSwap);
      set(i + offset, j, pixelToSwap);
    }
  }
  updatePixels();
  //   for (let i = 0; i < 1000; i++) {
  //     for (let j = 0; j < 1000; j++) {
  //       let randomX = Math.floor(Math.random() * 1000);
  //       let randomY = Math.floor(Math.random() * 1000);
  //       //let pixel = get(randomX, randomY);
  //       set(i, j, randomX);
  //     }
  //   }
}
