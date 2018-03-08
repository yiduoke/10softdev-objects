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

var create_circle = function(x, y){
    var circle_object = {
        x: x,
        y: y,
        r: 12,
        color: "red",
        svg_circle: document.createElementNS(NS, "circle"),
        remove: function(click){
            var element = click.target;
            click.stopPropagation();
            if (element.getAttribute("fill") == "red"){
                element.setAttribute("fill", "green");
            }
            else if(element.getAttribute("fill") == "green"){
                svg.removeChild(element);
                var cx = Math.floor(Math.random() * 501);
                var cy = Math.floor(Math.random() * 501);
                var thing = create_circle(cx, cy);
                thing.display();
            }
        },
        display: function(){
            this.svg_circle.setAttribute("cx", this.x);
            this.svg_circle.setAttribute("cy", this.y);
            this.svg_circle.setAttribute("r", 12);
            this.svg_circle.setAttribute("fill", "red");
            svg.appendChild(this.svg_circle);
            this.svg_circle.addEventListener("click", this.remove);
        }
    }
    return circle_object;
}

var new_circle = function(click){
    click.stopPropagation();
    var x = click.offsetX;
    var y = click.offsetY;

    var fake = create_circle(x,y);
    fake.display();
}

var clear = function(click){
    svg.innerHTML = '';
}

svg.addEventListener("click", new_circle);
clear_button.addEventListener("click", clear);
