const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const c = canvas.getContext('2d');

c.fillStyle = 'yellow';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'red';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'cyan';
c.fillRect(600, 200, 100, 100);
c.fillStyle = 'purple';
c.fillRect(300, 300, 100, 100);

// 선 그리기
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.lineTo(50, 300);
c.strokeStyle = 'skyblue';
c.stroke();


// 원 그리기
c.beginPath();
c.arc(300, 300, 50, 0, Math.PI * 2);
c.strokeStyle = 'blue';
c.stroke();

for (let i = 0; i < 10; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI * 2);
    c.strokeStyle = 'blue';
    c.stroke();
}

console.log(canvas);