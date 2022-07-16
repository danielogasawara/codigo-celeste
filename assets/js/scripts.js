const texto_processado = document.querySelector("#texto-processado");

function verificaCaracteres(texto) {
    let caractere;
    for (let i = 0; i < texto.length; i++) {
        caractere = texto.charAt(i);
        if (caractere.match(/[A-ZÀ-ú0-9]/g)){
            document.querySelector("#imagem-do-resultado").setAttribute("src", "assets/images/svg/onca-2.svg");
            document.querySelector("#imagem-do-resultado").setAttribute("alt", "Onça em pé te olhando.")
            document.querySelector("#titulo-do-resultado").innerText = "Calma filhote...";
            document.querySelector("#descricao-do-resultado").innerText = "Tem algum erro no texto, volta lá e concerta.";
            return true;
        }
    }
    return false;
}

function mostraTextoProcessado() {
    const caixa_com_texto_processado = document.querySelector("#com-texto-processado");
    const caixa_sem_texto_processado = document.querySelector("#sem-texto-processado");

    caixa_com_texto_processado.style.display = "flex";
    caixa_sem_texto_processado.style.display = "none";
}
function escondeTextoProcessado() {
    const caixa_com_texto_processado = document.querySelector("#com-texto-processado");
    const caixa_sem_texto_processado = document.querySelector("#sem-texto-processado");

    caixa_com_texto_processado.style.display = "none";
    caixa_sem_texto_processado.style.display = "flex";
}

function criptografaTexto() {
    let texto = document.querySelector("#campo-de-texto").value;
    if (texto != "") {
        if (verificaCaracteres(texto) === false) {
            mostraTextoProcessado();
            let resultado = "";
            for (let i = 0; i < texto.length; i++) {
                caractere = texto.charAt(i);
                switch (caractere) {
                    case "a":
                        resultado += "ai";
                        break;
                    case "e":
                        resultado += "enter";
                        break;
                    case "i":
                        resultado += "imes";
                        break;
                    case "o":
                        resultado += "ober";
                        break;
                    case "u":
                        resultado += "ufat";
                        break;
                    default:
                        resultado += caractere;
                        break;
                }
            }
            texto_processado.innerText = resultado;
        }
        else {
            escondeTextoProcessado();
        }  
    }
    else {
        escondeTextoProcessado();

        document.querySelector("#imagem-do-resultado").setAttribute("src", "assets/images/svg/onca-2.svg");
        document.querySelector("#imagem-do-resultado").setAttribute("alt", "Onça em pé te olhando.")
        document.querySelector("#titulo-do-resultado").innerText = "Tá de brincadeira comigo?";
        document.querySelector("#descricao-do-resultado").innerText = "A caixa de texto está vazia.";
    }
}

function descriptografaTexto() {
    let texto = document.querySelector("#campo-de-texto").value;
    if (texto != "") {
        if (verificaCaracteres(texto) === false) {
            mostraTextoProcessado();
            let resultado = texto;
            if (resultado.match(/ai/g) || resultado.match(/enter/g) || resultado.match(/imes/g) || resultado.match(/ober/g) || resultado.match(/ufat/g)) {
                resultado = resultado.replace(/ai/g, "a");
                resultado = resultado.replace(/enter/g, "e");
                resultado = resultado.replace(/imes/g, "i");
                resultado = resultado.replace(/ober/g, "o");
                resultado = resultado.replace(/ufat/g, "u")
            }
            texto_processado.innerText = resultado;
        }
    }
}

function copiaTexto() {
    navigator.clipboard.writeText(texto_processado.innerText);
}