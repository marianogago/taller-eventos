let divv = document.getElementById("hola")
divv.addEventListener("click", function(){
    alert("Hola! Soy el Div");
})

function saludar(event)
{
    alert("Hola!");
    event.stopPropagation();
}