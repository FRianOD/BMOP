const btn = document.querySelector(".submite")
const btnClose1 = document.querySelector(".close-popup1")
const btnClose2 = document.querySelector(".close-popup2")
function openModal(modal){
    modal.classList.add("active")
}

function closeModal(modal){
    modal.classList.remove("active")
}

function estaCerto(nome, sobreNome, email, tell) {
    const numero = tell.value;
    if(nome.value !== "" && sobreNome.value !== "" && email == "gmail.com" && (numero.length === 12 || numero.length === 11))
    {
        return true
    }
    else{
        return false
    }
}

btn.onclick = function () {
    const nome = document.getElementById("Nome")
    const sobreNome = document.getElementById("SobreNome")
    const email = document.getElementById("Email");
    const mail = email.value.split("@");
    const tell = document.getElementById("Tell")
    if(estaCerto(nome, sobreNome, mail[1], tell) == true){
        openModal(document.querySelector(".modal-content-ok"))
    } else {
        openModal(document.querySelector(".modal-content-errado"))
    }
}

btnClose1.onclick = function () {
    closeModal(document.querySelector(".modal-content-ok"));
}

btnClose2.onclick = function () {
    closeModal(document.querySelector(".modal-content-errado"));
}
