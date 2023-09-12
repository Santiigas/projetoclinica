import {validaCPF, validaData, validaNome} from './Modulo.js/validacaodedados'

const form = document.querySelector("#form")
const nomeInput = document.querySelector('#name')
const dataNascimentoInput = document.querySelector('#data_nascimento')
const sexoInput = document.querySelector('#sexo')
const cpfInput = document.querySelector("#cpf")
const telefoneInput = document.querySelector("#telefone")


//Mascara data
dataNascimentoInput.addEventListener('keypress', () => {
    let dataNascimentolength = dataNascimentoInput.value.length

    if(dataNascimentolength === 2 || dataNascimentolength === 5){
        dataNascimentoInput.value += '/'
    } 
})

//Mascara do CPF
cpfInput.addEventListener('keypress', () => {
    let cpflength = cpfInput.value.length

    if(cpflength === 3 || cpflength === 7){
        cpfInput.value += '.'
    } else if (cpflength === 11){
        cpfInput.value += '-'
    }
})

//Mascara do telefone
telefoneInput.addEventListener('keypress', () => {
    let telefonelength = telefoneInput.value.length

    if(telefonelength === 0 ){
        telefoneInput.value += '('
    } else if (telefonelength === 3){
        telefoneInput.value += ') '
    } else if(telefonelength === 5){
        telefoneInput.value += ' '
    } else if(telefonelength ===  10){
        telefoneInput.value += '-'
    }
})


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    if(validaNome(nomeInput.value) === false){
        alert("Por favor, preencha o seu nome");
        return;
    }
    
    const dataNascimentoInputValue = dataNascimentoInput.value.replace(/\/|-/g,"")
    if(validaData(dataNascimentoInputValue) === false){
        alert("Por favor, preencha a data de nascimento");
        return;
    }

    if(sexoInput.value === ""){
        alert('Preencha o sexo')
        return;
    }

    const cpfValue = cpfInput.value.replace(/\.|-/g,"")
    if(validaCPF(cpfValue) === false){
        alert("Invalido")
        return;
    }

    form.submit();
    console.log(dataNascimentoInput.value)
    alert("Enviado!")
})
