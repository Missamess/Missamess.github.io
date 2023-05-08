// Mouse Settings
let mouse = {
  x: 0,
  y: 0
};
window.addEventListener("mousemove", function(e) {
  mouse.x = event.x;
  mouse.y = event.y;
});

// Shape, Color, & Touch
class scanline {
  constructor(x, y, dx, dy, width) {
    this.maxWidth = width * 3;
    this.width = width;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    let colorArray = ["white"];
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }
  draw = () => {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x - this.width / 20, this.y);
    c.lineTo(this.x, this.y + this.width / 2);
    c.lineTo(this.x + this.width / 20, this.y);
    c.lineTo(this.x, this.y - this.width / 2);
    c.lineTo(this.x - this.width / 20, this.y);
    c.fillStyle = this.color;
    c.fill();
    this.update();
  };
  update = () => {
    if (
      this.x + this.width / 1 >= window.innerWidth || this.x - this.width / 1 <= 0
    )
    this.x += this.dx;
    this.y += this.dy;
    if (
      mouse.x - this.x < 25 &&
      mouse.x - this.x > -25 &&
      mouse.y - this.y < 25 &&
      mouse.y - this.y > -25 &&
      this.width < this.maxWidth
    ) {
      this.width += 3;
      this.x -= 1;
      this.y -= 1;
    }
  };
}

// Array & Canvas
const cvs = document.querySelector("canvas");
const c = cvs.getContext("2d");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
window.addEventListener("animationstart", function() {
});
let array = [];
for (let i = 100; i < 500; i++) {
  let width = Math.random() * 8 + 2;
  let x = Math.random() * window.innerWidth;
  let dx = (Math.random() - 1) * .25;
  let y = Math.random() * window.innerHeight;
  let dy = (Math.random() - 1) * .25;
  array.push(new scanline(x, y, dx, dy, width));
}
function animate() {
  requestAnimationFrame(animate);
  array.forEach(scanline => {
    scanline.draw();
  });
}
animate();
