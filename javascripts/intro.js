const cvs = document.getElementById("cvs");
const ctx = cvs.getContext('2d');

// ctx.strokeRect(0,0,100,100);

// ctx.clearRect(0, 0, cvs.width, cvs.heihgt)

ctx.beginPath();
    // ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.arc(150, 170, 75, 0, Math.PI * 2);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "green"; // !
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(150, 170, 35, 0, Math.PI * 2);
    ctx.fillStyle = "red"; // !
    // fills the inner circle with red color
    ctx.fill();
    ctx.closePath();