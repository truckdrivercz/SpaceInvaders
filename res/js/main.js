const canvas = document.getElementById("canva");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);