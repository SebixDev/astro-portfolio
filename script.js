function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
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