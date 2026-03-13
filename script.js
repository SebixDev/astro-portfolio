function createShootingStar() {
    if (document.documentElement.getAttribute('data-theme') === 'light') return;

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

setInterval(createShootingStar, 800);

const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
        document.querySelector('.icon').textContent = '☀️';
    }
}

toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.querySelector('.icon').textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('.icon').textContent = '🌙';
    }    
});