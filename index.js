import {validaCPF,validaData,validaNome} from './Modulo.js/validacaodedados.js'
import {MascaraData, MascaraCPF, MascaraTelefone} from './Modulo.js/mascaras.js'

//informacoes data
const segunda = document.querySelector()
const terca = document.querySelector()
const quarta = document.querySelector()
const quinta = document.querySelector()
const sexta = document.querySelector()
const sabado = document.querySelector()

segunda.addEventListener('click', function(event){
    const dia = 'Segunda'
    const horario = '13:00'
})

terca.addEventListener('click', function(event){
    const dia = 'Terca'
    const horario = '13:00'
})

quarta.addEventListener('click', function(event){
    const dia = 'Quarta'
    const horario = '13:00'
})

quinta.addEventListener('click', function(event){
    const dia = 'Quinta'
    const horario = '08:00'
})

sexta.addEventListener('click', function(event){
    const dia = 'Sexta'
    const horario = '08:00'
})

sabado.addEventListener('click', function(event){
    const dia = 'Sabado'
    const horario = '08:00'
})


//informações do paciente
const form = document.querySelector("#form")
const nomeInput = document.querySelector('#name')
const dataNascimentoInput = document.querySelector('#data_nascimento')
const sexoInput = document.querySelector('#sexo')
const cpfInput = document.querySelector("#cpf")
const telefoneInput = document.querySelector("#telefone")

MascaraData(dataNascimentoInput)
MascaraCPF(cpfInput)
MascaraTelefone(telefoneInput)

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    if(validaNome(nomeInput.value) === false){
        alert("Por favor, preencha o seu nome");
        return;
    }
    
    const dataNascimentoInputValue = dataNascimentoInput.value.replace(/\/|-/g,"").trim();
    if(dataNascimentoInputValue === ""){ 
        alert("Prencha a data");
        return;
    } 

    if(validaData(dataNascimentoInputValue) === false){
        alert("Data invalida");
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
    alert("Enviado!")
})
