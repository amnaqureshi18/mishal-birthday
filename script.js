function checkCode() {
    const input = document.getElementById('passcode').value;
    const error = document.getElementById('error');
    const lockScreen = document.getElementById('lock-screen');
    const mainContent = document.getElementById('main-content');

    // Passcode: 1710
    if (input === '1710') {
        lockScreen.style.display = 'none';
        mainContent.style.display = 'block';
        startFloatingHearts();
    } else {
        error.style.display = 'block';
    }
}

function startFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}

function showLoveAlert() {
    alert('آمین! 💖 مشعل کی زندگی ہمیشہ خوشیوں سے بھری رہے۔ I love you Mishi!');
}
