const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click', function () {
    alert('¡Sabía que ibas a decir que sí, mi amorcito! ❤️');
});

noBtn.addEventListener('click', function () {
    window.location.href = "no.html"; // Redirige a la nueva página
});

noBtn.addEventListener('mouseover', function () {
    noBtn.style.position = 'absolute';

    let maxX = window.innerWidth - noBtn.clientWidth - 50;
    let maxY = window.innerHeight - noBtn.clientHeight - 50;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
