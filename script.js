// Temporizador
const eventDate = new Date("may 30, 2026 14:00:00").getTime();
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "¡La fiesta ha comenzado!";
    }
}, 1000);

// Confeti
// Lilo & Stitch flotando


// Confeti
/* ===== Confetti ===== 
const confettiContainer = document.querySelector('.confetti');

function createConfettiPiece() {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.width = piece.style.height = Math.random() * 10 + 5 + 'px';
    piece.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
    piece.style.animationDuration = 3 + Math.random() * 3 + 's';
    piece.style.animationDelay = Math.random() * 3 + 's';
    confettiContainer.appendChild(piece);

    // Eliminar después de caer
    setTimeout(() => {
        piece.remove();
    }, 6000);
}

// Genera continuamente confetti
setInterval(createConfettiPiece, 200);
*/
/* ===== Burbujas flotando 
const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.width = bubble.style.height = Math.random() * 20 + 10 + 'px';
    bubble.style.backgroundColor = 'rgb(238, 255, 0)';
    bubble.style.animationDuration = 4 + Math.random() * 3 + 's';
    bubblesContainer.appendChild(bubble);

    // Eliminar después de flotar
    setTimeout(() => {
        bubble.remove();
    }, 7000);
}

// Genera continuamente burbujas
setInterval(createBubble, 300);
===== */

//Musica

const music = document.getElementById('music');
const musicButton = document.getElementById('music-button');

// Al tocar cualquier parte de la página
document.body.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicButton.classList.remove('paused'); // animación activa
    } else {
        music.pause();
        musicButton.classList.add('paused'); // animación detenida
    }
});



// burbujas con gif

/*
document.addEventListener("DOMContentLoaded", function() {

    const container = document.querySelector('.balloons');

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        const size = 170; // tamaño fijo elegante
        balloon.style.width = size + "px";
        balloon.style.height = size * 2.5 + "px";

        balloon.style.left = Math.random() * 100 + "%";
        balloon.style.backgroundImage = "url('./imagen/luigi.png')";

        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 18000);
    }

    setInterval(createBalloon, 2500);
});
*/


//nuevo dos imagenes suben

document.addEventListener("DOMContentLoaded", function() {

    const container = document.querySelector('.balloons');

    function crearImagen(lado, imagen) {

        const obj = document.createElement('div');
        obj.classList.add('balloon');

        obj.style.width = "300px";
        obj.style.height = "300px";

        obj.style.backgroundImage = `url('${imagen}')`;

        if (lado === "izq") {
            obj.style.left = "20px";
            obj.classList.add("fly-left");
        } else {
            obj.style.right = "20px";
            obj.classList.add("fly-right");
        }

        container.appendChild(obj);

        setTimeout(() => {
            obj.remove();
            crearImagen(lado, imagen);
        }, 18000);
    }

    crearImagen("izq", "./imagen/globos rosa.gif");
    crearImagen("der", "imagen/Summer Love Sticker by Nora Fikse.gif");

});
//confetti con imagen

document.addEventListener("DOMContentLoaded", function() {

    const container = document.querySelector('.confetti');

    const imagenes = [
        "imagen/gif.gif",
        "imagen/Good Vibes Love Sticker by BOMBONATOR_WOLPH (1).gif",

    ];

    function createConfettiPiece(imgSrc) {

        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');

        piece.style.left = Math.random() * 100 + '%';

        const size = Math.random() * 40 + 80;
        piece.style.width = size + 'px';
        piece.style.height = size + 'px';

        const duration = 6 + Math.random() * 6;
        piece.style.animationDuration = duration + 's';

        const img = document.createElement("img");
        img.src = imgSrc;
        img.style.width = "100%";
        img.style.height = "100%";

        piece.appendChild(img);
        container.appendChild(piece);

        piece.addEventListener("animationend", function() {
            piece.remove();
            createConfettiPiece(imgSrc); // vuelve a caer la misma imagen
        });
    }

    // crear solo 3 elementos
    imagenes.forEach(img => createConfettiPiece(img));

});

const elements = document.querySelectorAll('h2, h3, h4, p');

function showOnScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);