const container = document.querySelector("#container");

function onclickToBlack(size) {
    // Calcular el número total de píxeles
    const totalPixels = size * size;

    // Limpiar el contenedor por si hay píxeles previos
    container.innerHTML = '';

    // Ajustar las propiedades de la cuadrícula CSS
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Crear los píxeles y añadirlos al contenedor
    for (let i = 0; i < totalPixels; i++) {
        const pixel = document.createElement("div");

        // Añadir evento click para cambiar el color
        pixel.addEventListener("mouseover", () => {
            if (pixel.style.backgroundColor === "black") {
                pixel.style.backgroundColor = "white";
            } else {
                pixel.style.backgroundColor = "black";
            }
        });

        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }
}

// Solicitar al usuario el tamaño del dibujo
let size = parseInt(prompt('Escriba el tamaño del dibujo (ej. 4 para 4x4):'));
onclickToBlack(size);


