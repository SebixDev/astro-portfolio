function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    const colors = ['#ffffff', '#10b981', '#34d399', '#60a5fa', '#ff4d4d', '#ff0000', '#fbbf24'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.setProperty('--star-color', randomColor);

    const startX = Math.random() * (window.innerWidth + 400); 
    const startY = Math.random() * (window.innerHeight / 2.5);
    const duration = Math.random() * 1.5 + 0.8;
    
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;
    star.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

setInterval(() => {
    createShootingStar();
}, 800);