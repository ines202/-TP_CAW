window.onload = function() {
    document.getElementById("maze").onmouseleave = leavemaze;
    document.getElementById("maze").onmouseenter = entermaze;
    document.getElementById("end").onmouseover = end;

    var b = document.getElementsByClassName("boundary");
    for (var i = 0; i < b.length; i++) {
        b[i].onmouseover = mistake;
        b[i].onmousleave = mistake;
    }
};

function leavemaze() {
    cheat  = true;
}

function  entermaze() {
    cheat  = false;
}

function mistake(){
    var b = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < b.length; i++) {
        b[i].style.backgroundColor = "red";
        if (b[i].style.backgroundColor == "red") {
            var status = document.getElementById("status").innerHTML = "Sorry :( you lost";
            document.getElementById("status").style.color="red";
        }
    }
}
    
function end() {
    var b = document.getElementsByClassName("boundary");
    
    for (var i = 0; i < b.length; i++) {
        if (b[i].style.backgroundColor != "red" && cheat ==false) {
            var status = document.getElementById("status").innerHTML = "Congratulations :) you won !";
            document.getElementById("status").style.color="#33cc33";
        } else {
            var status = document.getElementById("status").innerHTML = "Stop Cheating ;) !";
            document.getElementById("status").style.color="blue";
        }
    }
}
