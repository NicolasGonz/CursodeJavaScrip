//document.createElement("ul")

let list = document.createElement("ul");
document.body.appendChild(list)

let colores = ["#f94144", "#f8961e", "#90be6d", "#577590"]


for ( var y = 0; y < 4; y++) {
    for ( var x = 0; x < 4; x++) {

        let item = document.createElement("li");
        
        let random = Math.floor(Math.random() * 4);

        let color = colores[random]

        item.setAttribute("data-color", color)

        list.appendChild(item)
        
        item.style.backgroundColor = color
    }
}

let items = Array.from(list.children)
items.forEach(item =>{
    item.onclick = function(e){
        let target = e.target;
        let color = target.dataset.color;
        let selected = items.find(item => item.classList.contains("selected") == true)
        if(!selected){
            target.classList.add("selected")
        }
        console.log (target, color, selected)
    }
})
//ul => unordered list
//ol => ordered list
//li => list item