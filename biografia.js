var isTextVisible = false;

function toggleText() {
    isTextVisible = !isTextVisible;

    if(isTextVisible) {
        document.getElementById("div-extra-text").style.display = "inline";
        document.getElementById("btn-show").innerText = "Leer menos...";
    } else {
        document.getElementById("div-extra-text").style.display = "none";
        document.getElementById("btn-show").innerText = "Leer más...";
    }
}