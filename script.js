
/* =====================================================
   PORTAFOLIO DE DIBUJO DIGITAL
   Proyectos adaptados de Khan Academy a HTML Canvas
===================================================== */


/* =====================================================
   FUNCION PARA CREAR LOS CANVAS
===================================================== */

function crearCanvas(contenedorId, ancho = 400, alto = 400) {
    const contenedor = document.getElementById(contenedorId);

    if (!contenedor) {
        console.error("No se encontró el contenedor:", contenedorId);
        return null;
    }

    const canvas = document.createElement("canvas");
    canvas.width = ancho;
    canvas.height = alto;

    contenedor.appendChild(canvas);

    return canvas.getContext("2d");
}


/* =====================================================
   PROYECTO 1: MUÑECO DE NIEVE DELINEADO
===================================================== */

const nieve = crearCanvas("muñeco", 400, 300);

if (nieve) {
    nieve.strokeStyle = "#222222";
    nieve.lineWidth = 1;

    // Rectángulo del suelo
    nieve.strokeRect(0, 180, 400, 120);

    // Cuerpo inferior
    nieve.beginPath();
    nieve.ellipse(200, 220, 75, 75, 0, 0, Math.PI * 2);
    nieve.stroke();

    // Cuerpo central
    nieve.beginPath();
    nieve.ellipse(200, 145, 50, 50, 0, 0, Math.PI * 2);
    nieve.stroke();

    // Cabeza
    nieve.beginPath();
    nieve.ellipse(200, 85, 37.5, 37.5, 0, 0, Math.PI * 2);
    nieve.stroke();

    // Brazos
    nieve.beginPath();
    nieve.moveTo(160, 145);
    nieve.lineTo(95, 15);

    nieve.moveTo(240, 145);
    nieve.lineTo(305, 15);
    nieve.stroke();
}


/* =====================================================
   PROYECTO 2: CARA DE RANA
===================================================== */

const rana = crearCanvas("rana", 400, 300);

if (rana) {
    // Cabeza verde
    rana.fillStyle = "rgb(30, 204, 91)";
    rana.beginPath();
    rana.ellipse(200, 175, 110, 60, 0, 0, Math.PI * 2);
    rana.fill();

    // Boca negra
    rana.fillStyle = "black";
    rana.beginPath();
    rana.ellipse(200, 175, 87.5, 33.5, 0, 0, Math.PI * 2);
    rana.fill();

    // Ojos blancos
    rana.fillStyle = "white";
    rana.strokeStyle = "rgb(30, 204, 91)";
    rana.lineWidth = 5;

    rana.beginPath();
    rana.arc(145, 115, 20, 0, Math.PI * 2);
    rana.fill();
    rana.stroke();

    rana.beginPath();
    rana.arc(255, 115, 20, 0, Math.PI * 2);
    rana.fill();
    rana.stroke();

    // Pupilas cuadradas
    rana.fillStyle = "black";
    rana.fillRect(140, 110, 10, 10);
    rana.fillRect(250, 110, 10, 10);
}


/* =====================================================
   PROYECTO 3: PAISAJE CON MUÑECO DE NIEVE Y SOL
===================================================== */

const paisaje = document.getElementById("paisaje");

if (paisaje) {
    const ctxPaisaje = paisaje.getContext("2d");

    // Cielo
    ctxPaisaje.fillStyle = "rgb(0, 199, 200)";
    ctxPaisaje.fillRect(0, 0, 400, 400);

    // Suelo
    ctxPaisaje.fillStyle = "rgb(0, 200, 100)";
    ctxPaisaje.fillRect(0, 300, 400, 100);

    // Sol
    ctxPaisaje.fillStyle = "rgb(252, 207, 45)";
    ctxPaisaje.beginPath();
    ctxPaisaje.ellipse(80, 64, 50, 50, 0, 0, Math.PI * 2);
    ctxPaisaje.fill();

    // Cuerpo inferior
    ctxPaisaje.fillStyle = "rgb(247, 242, 247)";
    ctxPaisaje.beginPath();
    ctxPaisaje.ellipse(200, 300, 75, 75, 0, 0, Math.PI * 2);
    ctxPaisaje.fill();

    // Cuerpo central
    ctxPaisaje.beginPath();
    ctxPaisaje.ellipse(200, 200, 50, 50, 0, 0, Math.PI * 2);
    ctxPaisaje.fill();

    // Cabeza
    ctxPaisaje.beginPath();
    ctxPaisaje.ellipse(200, 120, 37.5, 37.5, 0, 0, Math.PI * 2);
    ctxPaisaje.fill();
}


/* =====================================================
   PROYECTO 4: DIENTES DE CONEJO
===================================================== */

const canvasBucky = document.getElementById("conejo");
const bucky = canvasBucky
    ? canvasBucky.getContext("2d")
    : null;

if (bucky) {

    // Color del contorno
    bucky.strokeStyle = "black";
    bucky.lineWidth = 1;

    // Oreja izquierda
    bucky.fillStyle = "rgb(255, 255, 255)";
    bucky.beginPath();
    bucky.ellipse(150, 70, 30, 60, 0, 0, Math.PI * 2);
    bucky.fill();
    bucky.stroke();

    // Oreja derecha
    bucky.beginPath();
    bucky.ellipse(240, 70, 30, 60, 0, 0, Math.PI * 2);
    bucky.fill();
    bucky.stroke();

    // Cara
    bucky.beginPath();
    bucky.ellipse(200, 170, 75, 75, 0, 0, Math.PI * 2);
    bucky.fill();
    bucky.stroke();

    // Ojos
    const BuckyEyes = 30;
    bucky.fillStyle = "black";

    bucky.beginPath();
    bucky.ellipse(
        170, 150,
        BuckyEyes / 2, BuckyEyes / 2,
        0, 0, Math.PI * 2
    );
    bucky.fill();

    bucky.beginPath();
    bucky.ellipse(
        230, 150,
        BuckyEyes / 2, BuckyEyes / 2,
        0, 0, Math.PI * 2
    );
    bucky.fill();

    // Boca
    bucky.beginPath();
    bucky.moveTo(150, 200);
    bucky.lineTo(250, 200);
    bucky.stroke();

    // Diente izquierdo
    const tooth = 25;
    bucky.fillStyle = "white";

    bucky.fillRect(185, 200, 15, tooth);
    bucky.strokeRect(185, 200, 15, tooth);

    // Diente derecho
    bucky.fillRect(200, 200, 15, tooth);
    bucky.strokeRect(200, 200, 15, tooth);
}


/* =====================================================
   PROYECTO 5: PIZZA EN UN PLATO
===================================================== */

const pizza = document.getElementById("pizza");

if (pizza) {
    const ctxPizza = pizza.getContext("2d");

    // Mesa de madera
    ctxPizza.fillStyle = "rgb(186, 145, 20)";
    ctxPizza.fillRect(0, 0, 400, 400);

    // Plato exterior
    ctxPizza.beginPath();
    ctxPizza.ellipse(200, 200, 175, 175, 0, 0, Math.PI * 2);
    ctxPizza.fillStyle = "white";
    ctxPizza.fill();
    ctxPizza.strokeStyle = "black";
    ctxPizza.stroke();

    // Plato interior
    ctxPizza.beginPath();
    ctxPizza.ellipse(200, 200, 150, 150, 0, 0, Math.PI * 2);
    ctxPizza.fillStyle = "white";
    ctxPizza.fill();
    ctxPizza.stroke();

    // Rebanada triangular
    ctxPizza.beginPath();
    ctxPizza.moveTo(100, 100);
    ctxPizza.lineTo(300, 100);
    ctxPizza.lineTo(200, 330);
    ctxPizza.closePath();

    ctxPizza.fillStyle = "rgb(255, 255, 209)";
    ctxPizza.fill();
    ctxPizza.strokeStyle = "black";
    ctxPizza.stroke();

    // Borde de la pizza
    ctxPizza.beginPath();
    ctxPizza.moveTo(100, 100);
    ctxPizza.lineTo(113, 130);
    ctxPizza.lineTo(299, 130);
    ctxPizza.lineTo(299, 100);
    ctxPizza.closePath();

    ctxPizza.fillStyle = "rgb(199, 176, 82)";
    ctxPizza.fill();
    ctxPizza.stroke();

    // Ingredientes
    ctxPizza.fillStyle = "rgb(255, 0, 0)";

    const ingredientes = [
        [157, 165, 27, 29],
        [241, 165, 27, 29],
        [199, 165, 27, 29],
        [182, 209, 27, 29],
        [221, 209, 27, 29],
        [197, 255, 27, 29]
    ];

    ingredientes.forEach(function(ingrediente) {
        const [x, y, ancho, alto] = ingrediente;

        ctxPizza.beginPath();
        ctxPizza.ellipse(
            x,
            y,
            ancho / 2,
            alto / 2,
            0,
            0,
            Math.PI * 2
        );
        ctxPizza.fill();
    });
}


/* =====================================================
   PROYECTO 6: ATARDECER CON SOL CRECIENTE
===================================================== */

const atardecer = document.getElementById("atardecer");

if (atardecer) {
    const ctxAtardecer = atardecer.getContext("2d");
    let sunSize = 30;

    function dibujarAtardecer() {
        ctxAtardecer.fillStyle = "rgb(82, 222, 240)";
        ctxAtardecer.fillRect(0, 0, 400, 400);

        // El sol queda parcialmente detrás del terreno.
        ctxAtardecer.fillStyle = "rgb(255, 204, 0)";
        ctxAtardecer.beginPath();
        ctxAtardecer.arc(200, 298, sunSize / 2, 0, Math.PI * 2);
        ctxAtardecer.fill();

        ctxAtardecer.fillStyle = "rgb(76, 168, 67)";
        ctxAtardecer.fillRect(0, 300, 400, 100);

        sunSize += 1;
        requestAnimationFrame(dibujarAtardecer);
    }

    dibujarAtardecer();
}


/* =====================================================
   PROYECTO 7: SOL Y NUBES EN MOVIMIENTO
===================================================== */

const nubes = document.getElementById("nubes");

if (nubes) {
    const ctxNubes = nubes.getContext("2d");
    let leftX = 145;
    let rightX = 208;
    let sunRadius = 100;

    function dibujarNubes() {
        ctxNubes.fillStyle = "rgb(184, 236, 255)";
        ctxNubes.fillRect(0, 0, 400, 400);

        ctxNubes.fillStyle = "rgb(255, 170, 0)";
        ctxNubes.beginPath();
        ctxNubes.arc(200, 100, sunRadius / 2, 0, Math.PI * 2);
        ctxNubes.fill();

        ctxNubes.fillStyle = "white";
        // Nube izquierda
        ctxNubes.beginPath();
        ctxNubes.ellipse(leftX, 150, 63, 48.5, 0, 0, Math.PI * 2);
        ctxNubes.ellipse(leftX + 62, 150, 35, 30, 0, 0, Math.PI * 2);
        ctxNubes.ellipse(leftX - 62, 150, 35, 30, 0, 0, Math.PI * 2);
        ctxNubes.fill();

        // Nube derecha
        ctxNubes.beginPath();
        ctxNubes.ellipse(rightX, 100, 63, 48.5, 0, 0, Math.PI * 2);
        ctxNubes.ellipse(rightX + 62, 100, 35, 30, 0, 0, Math.PI * 2);
        ctxNubes.ellipse(rightX - 62, 100, 35, 30, 0, 0, Math.PI * 2);
        ctxNubes.fill();

        sunRadius += 2;
        leftX -= 1;
        rightX += 1;
        requestAnimationFrame(dibujarNubes);
    }

    dibujarNubes();
}


/* =====================================================
   PROYECTO 8: ESTRELLAS SOBRE LA CIUDAD
===================================================== */

const noche = document.getElementById("noche");

if (noche) {
    const ctxNoche = noche.getContext("2d");
    let xPos = 0;
    let yPos = 100;
    let x2 = 400;
    let y2 = 180;

    function dibujarNoche() {
        ctxNoche.fillStyle = "rgb(29, 40, 115)";
        ctxNoche.fillRect(0, 0, 400, 400);

        // Luna
        ctxNoche.fillStyle = "rgb(255, 242, 0)";
        ctxNoche.beginPath();
        ctxNoche.arc(330, 60, 17.5, 0, Math.PI * 2);
        ctxNoche.fill();

        // Edificios
        ctxNoche.fillStyle = "rgb(30, 30, 45)";
        ctxNoche.fillRect(0, 340, 80, 160);
        ctxNoche.fillRect(80, 290, 90, 210);
        ctxNoche.fillRect(170, 360, 70, 140);
        ctxNoche.fillRect(240, 310, 90, 190);
        ctxNoche.fillRect(330, 350, 70, 150);

        // Ventanas
        ctxNoche.fillStyle = "rgb(255, 220, 90)";
        [[20, 365], [50, 365], [100, 365], [135, 315], [260, 335], [295, 335]]
            .forEach(function(posicion) {
                ctxNoche.fillRect(posicion[0], posicion[1], 12, 15);
            });

        // Estrella amarilla con cola
        ctxNoche.fillStyle = "rgb(255, 242, 0)";
        ctxNoche.beginPath();
        ctxNoche.arc(xPos, yPos, 10, 0, Math.PI * 2);
        ctxNoche.fill();
        ctxNoche.beginPath();
        ctxNoche.moveTo(xPos - 30, yPos - 10);
        ctxNoche.lineTo(xPos, yPos);
        ctxNoche.strokeStyle = "rgb(255, 242, 0)";
        ctxNoche.stroke();

        // Estrella blanca
        ctxNoche.fillStyle = "white";
        ctxNoche.beginPath();
        ctxNoche.arc(x2, y2, 5, 0, Math.PI * 2);
        ctxNoche.fill();

        xPos += 4;
        yPos += 1;
        x2 -= 3;
        y2 += 1;

        if (xPos > 420) {
            xPos = -20;
            yPos = 100;
        }
        if (x2 < -10) {
            x2 = 420;
            y2 = 180;
        }

        requestAnimationFrame(dibujarNoche);
    }

    dibujarNoche();
}
