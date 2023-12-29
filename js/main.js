
function siguienteFormulario(event) {
    
    var elementoActivo = document.getElementsByClassName("activo");
    var elementoSiguiente = document.querySelector(".activo + .desactivo");
    //console.log(elementoActivo);
    elementoActivo[0].classList.add("desactivo");
    elementoActivo[0].classList.remove("activo");
    elementoSiguiente.classList.add("activo");
    elementoSiguiente.classList.remove("desactivo");
    
}
function mostrarResultado() {
    var nombre = document.getElementById("nombre");
    alert("hola " + nombre.value + " nos pondremos en contacto con vos para concretar la adopción");

}