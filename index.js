import {validaCPF,validaData,validaNome} from './Modulo.js/validacaodedados.js'
import {MascaraData, MascaraCPF, MascaraTelefone} from './Modulo.js/mascaras.js'

//informações do paciente
const form = document.querySelector("#form")
const nomeInput = document.querySelector('#name')
const dataNascimentoInput = document.querySelector('#data_nascimento')
const sexoInput = document.querySelector('#sexo')
const cpfInput = document.querySelector("#cpf")
const telefoneInput = document.querySelector("#telefone")

//mascaras de dados
MascaraData(dataNascimentoInput)
MascaraCPF(cpfInput)
MascaraTelefone(telefoneInput)

//criacao de paragrafos na tela
function CriaParagrafos () {
    const p = document.createElement('p');
    return p;
}

//funcao que mostra a mensagem na tela
function alertaNaTela(mensagem){
    const mensagem_na_tela = document.querySelector('#alerta')
    mensagem_na_tela.innerHTML= '';

    const p = CriaParagrafos();

    p.innerHTML = mensagem
    mensagem_na_tela.appendChild(p)
}

//verificacao dos dados dos formulario
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    if(validaNome(nomeInput.value) === false){
        alertaNaTela('Nome precisa ser preenchido!');
        return;
    }
    
    const dataNascimentoInputValue = dataNascimentoInput.value.replace(/\/|-/g,"").trim();
    if(dataNascimentoInputValue === ""){ 
        alertaNaTela('Data precisa ser preenchida!');
        return;
    } 

    if(validaData(dataNascimentoInputValue) === false){
        alertaNaTela('Data invalida!Tente novamente');
        return;
    }

    if(sexoInput.value === ""){
        alertaNaTela('Preencha o sexo')
        return;
    }
    const cpfValue = cpfInput.value.replace(/\.|-/g,"")
    if(validaCPF(cpfValue) === false){
        alertaNaTela('CPF vazio ou invalido')
        return;
    }

    if(telefoneInput.value === ""){
        alertaNaTela('Numero vazio ou invalido')
        return;
    }
    

    form.submit();
    alert("Enviado!")

    alert(`${nomeInput.value}`)
})


// ------------ CRUD JAVASCRIPT ------------ // 
const consultaPaciente = {
    paciente:[
        {
            nome: nomeInput.value,
            dataNascimento: dataNascimentoInput.value,
            sexo: sexoInput.value,
            cpf: cpfInput.value,
            telefone: telefoneInput.value,
        }
    ],
    medico:[
        {
            medico: 'Dr. Santiago Oliveira',
            especialidade: 'Psicologo',
            crm: '2783',
            rqe: true,
        }
    ],
}


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
