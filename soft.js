// I don't know how to objectify this 
// you can't make an svg circle one of your own objects
// the only attribute of these circles that changes is their
// color, which you can't objectify

var NS="http://www.w3.org/2000/svg";
var svg = document.createElementNS(NS,"svg");
svg.setAttribute("height", 500);
svg.setAttribute("width", 500);
document.body.appendChild(svg);

var clear_button = document.getElementById("clear");

var create = function(x, y){
    var circle = document.createElementNS(NS, "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 12);
    circle.setAttribute("fill", "red");
    svg.appendChild(circle);
    circle.addEventListener("click", new_color);
}

var new_color = function(click){
    if (this.getAttribute("fill") == "red"){
        this.setAttribute("fill", "green");
    }
    else if (this.getAttribute("fill") == "green"){
        svg.removeChild(this);
        create(Math.floor(Math.random() * 501), Math.floor(Math.random() * 501));
    }
    click.stopPropagation();
}

var new_circle = function(click){
    click.stopPropagation();
    var x = click.offsetX;
    var y = click.offsetY;

    create(x, y);
}

var clear = function(click){
    svg.innerHTML = '';
}

svg.addEventListener("click", new_circle);
clear_button.addEventListener("click", clear);
