function basic_window_func() {
    window.alert("This is a windows.alert");
    alert("A 2nd alert?")
} 

function delete_page() {
    document.getElementById("title").innerText = "GAME OVER";
    document.getElementById("title").style.fontSize = "300px";
    document.getElementById("first_button").style.display = "none";
    document.getElementById("hidden_button").style.display = "none";
    document.getElementById("button_grid").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    setInterval('autoRefresh()', 5000);
}

function autoRefresh() {
    window.location = window.location.href;
}

function reveal_button() {
    if (document.getElementById("title").innerText != "GAME OVER") {
        document.getElementById("hidden_button").style.display = "block";
    }
}

function reveal_grid() {
    document.getElementById("button_grid").style.display = "grid";
    document.getElementById("instructions").style.display = "block";
    document.getElementById("hidden_button").style.display = "none";
    document.getElementById("first_button").style.display = "none";
}

function winning_page() {
    document.getElementById("title").innerText = "YOU WIN";
    document.getElementById("title").style.fontSize = "300px";
    document.getElementById("first_button").style.display = "none";
    document.getElementById("hidden_button").style.display = "none";
    document.getElementById("button_grid").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    setInterval('autoRefresh()', 8000);
}

function waiting_dots_1() {
    document.getElementById("dots").innerText = "......";
}

function waiting_dots_2() {
    document.getElementById("dots").innerText = ".....";
}

function waiting_dots_3() {
    document.getElementById("dots").innerText = "....";
}

function waiting_dots_4() {
    document.getElementById("dots").innerText = "...";
}

function waiting_dots_5() {
    document.getElementById("dots").innerText = "..";
}

function waiting_dots_6() {
    document.getElementById("dots").innerText = ".";
}

function waiting_dots_6() {
    document.getElementById("dots").innerText = "";
}