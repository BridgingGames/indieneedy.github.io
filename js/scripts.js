function dropMenuFunction() {
    let x = document.getElementById("menu");
    let y = document.getElementById("button");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.backgroundImage = "url('./images/down-arrow.png')";
    } else {
        x.style.display = "block";
        y.style.backgroundImage = "url('./images/up-arrow.png')";
    }
}

function updateWindowResize() {
    let w = window.innerWidth;
    let x = document.getElementById("menu");

    if (w > 767) {
        x.style.display = "block";
    }
    else if(w < 767) {
        x.style.display = "none";
    }
}