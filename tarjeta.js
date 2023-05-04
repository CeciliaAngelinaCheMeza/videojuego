function changeBackground() {
    var card = document.getElementsByClassName("card")[0];
    var button = document.getElementsByTagName("button")[0];

    if (card.style.backgroundColor === "lightblue") {
        card.style.backgroundColor = "#fff";
        button.innerHTML = "Cambiar color";
    } else {
        card.style.backgroundColor = "lightblue";
        button.innerHTML = "Volver al color original";
    }
}
