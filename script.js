const main = document.querySelector("#main");

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "square-div");
    squareDiv.addEventListener("mouseover", () => {
        squareDiv.classList.toggle("mouseover-div");
    })

    main.appendChild(squareDiv)
}