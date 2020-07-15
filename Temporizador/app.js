console.log("temporizador")
console.clear()
/*
setInterval(() => {
    let hora = new Date(Date.now()).getHours()
    let minutos = new Date(Date.now()).getMinutes()
    let segundos = new Date(Date.now()).getSeconds()
    console.log(hora, minutos, segundos)

}, 1000); */

let boton = document.getElementById("start")
let start = false
let minutos = 20
boton.addEventListener("click",function(e){
    if (!start){
        console.log("Empieza el juego!")
        start = true
        boton.innerHTML = "detener"
        setInterval(() => {
            minutos = minutos - 1
            console.log("segundos", minutos)
        }, 1000);
    }else{
        console.log("Paraste el juego")
        start = false
        clearInterval()
        if (minutos == 0){
            alert("Que bien! ganaste el juego papu!");
            location.reload()
        }else{
            if (minutos > 0){
                alert("Perdiste por ansioso, alcahuete!, te faltaban " + minutos + " segundos")
                location.reload()
            }else {
                alert("Que lento que sos hermano, te pasastes " + (minutos*-1) + " segundos")
                location.reload()
            }
        }
}
})

