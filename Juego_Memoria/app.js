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
        

    }
}

let items = Array.from(list.children)
items.forEach(item =>{
    item.onclick = function(e){
        let target = e.target;
        let color = target.dataset.color;
        let selected = items.find(item => item.classList.contains("selected") == true)
        if(!selected){
            target.style.backgroundColor = color
            target.classList.add("selected")
        }
        else{
            if(selected.dataset.color == color){
                target.style.backgroundColor = color
                setTimeout(function(){
                    alert("Felicidades lo has logrado!")
                location.reload()
                }, 1000)
            }
            else{
                items.forEach(i => i.classList.remove("selected"))
                items.forEach(i => i.style.backgroundColor = "rgba(30, 30, 30,1)")
            }
        }
        console.log (target, color, selected)
    }
})

//ul => unordered list
//ol => ordered list
//li => list item