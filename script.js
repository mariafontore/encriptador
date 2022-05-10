const inputTextoIngresado = document.querySelector(".texto-ingresado");
const inputTextoEncriptado = document.querySelector(".texto-encriptado");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTextoIngresado.value);
    inputTextoEncriptado.value = textoEncriptado;
    const quitarimagen = document.querySelector(".img-muneco");
    quitarimagen.remove();

}

function encriptar(stringAencriptar) {

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringAencriptar = stringAencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringAencriptar.includes(matrizCodigo[i][0])) {
            stringAencriptar = stringAencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringAencriptar;
}


function btnDesencriptar() {

    const textoDesencriptado = desencriptar(inputTextoEncriptado.value);
    inputTextoEncriptado.value = textoDesencriptado;

}

function desencriptar(stringAdesencriptar) {
    let matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    stringAdesencriptar = stringAdesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringAdesencriptar.includes(matrizCodigo[i][0])) {
            stringAdesencriptar = stringAdesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringAdesencriptar;
}

document.querySelectorAll(".boton-copiar").forEach(el => el.addEventListener("click", copy));

function copy(e) {
    // obtenemos el input
    const input = this.previousElementSibling;

    // Selecciona el contenido del campo
    input.select();

    // Copia el texto seleccionado
    document.execCommand("copy");
}