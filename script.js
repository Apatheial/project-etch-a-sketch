const main = document.querySelector("#main");

const calculateSquares = (squaresNumber) => {
    const MAX_WIDTH = 800;
    let totalSquare;
    let squareSize;

    if (squaresNumber < 4) {
        totalSquare = 16 * 16;
        squareSize = MAX_WIDTH / 16;
        return {totalSquare, squareSize};
    }

    if (squaresNumber > 100) {
        totalSquare = 100 * 100;
        squareSize = MAX_WIDTH / 100;
        return {totalSquare, squareSize};
    }

    totalSquare = squaresNumber * squaresNumber;
    squareSize = MAX_WIDTH / squaresNumber;
    return {totalSquare, squareSize};
}

const createSketchPad = (squaresNumber = 16) => {
    const {totalSquare, squareSize} = calculateSquares(squaresNumber);
    removeSketchPad();
    opacityController.resetOpacity();

    for (let i = 0; i < totalSquare; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.setAttribute("class", "square-div");
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        main.appendChild(squareDiv)
    }
}

const removeSketchPad = () => { 
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
}

const randomSquareColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

const opacityController = {
    opacity: 0,

    decreaseOpacity() {
        const currentOpacity = this.opacity;
        this.opacity += 0.1
        if (this.opacity > 1) this.opacity = 1;
        return currentOpacity;
    },

    resetOpacity() {
        this.opacity = 0;
    }
}

main.addEventListener("mouseover", (element) => {
    if (element.target.classList.contains("square-div")) {
        element.target.style.backgroundColor = randomSquareColor();
        element.target.style.opacity = opacityController.decreaseOpacity();
    }
})

const button = document.querySelector("#btn-sketch-pad");

button.addEventListener("click", () => {
    const squareNumber = parseInt(prompt("Enter the number of square per side (MAX 100):"));
    isNaN(squareNumber) ? createSketchPad() : createSketchPad(squareNumber);
})

createSketchPad();
