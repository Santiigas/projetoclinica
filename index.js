const form = document.querySelector("#form")
const nomeInput = document.querySelector('#name')
const dataNascimentoInput = document.querySelector('#data_nascimento')
const sexoInput = document.querySelector('#sexo')
const cpfInput = document.querySelector("cpf")

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    if(nomeInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }
    
    if(dataNascimentoInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }

    if(!validaCPF(cpfInput.value, 11)){
        alert('O CPF precisa de 11 digitos')
        return;
    }

    if(sexoInput.value === ""){
        alert('O CPF precisa de 8 digitos')
        return;
    }

    form.submit();
})

//fução que valida CPF
function validaCPF(cpfInput, minDigits){
    if(cpfInput.length >= minDigits){
    return true
    }

    return false
} 