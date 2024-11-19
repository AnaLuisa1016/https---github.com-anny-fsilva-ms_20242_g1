document.querySelector('.open-popup').addEventListener('click', () => {
    document.getElementById('popup').classList.add('active');
});

document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').classList.remove('active');
});
