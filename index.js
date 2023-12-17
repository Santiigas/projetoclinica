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
form.addEventListener('submit', (event) => {
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
    
    let pacientes = new Array();
    //verifica se a propiedade no localstorage
    if (localStorage.hasOwnProperty("pacientes")){
        //recuperar os valores da propiedade pacientes no localStorage
        //converte a string para object
        pacientes = JSON.parse(localStorage.getItem("pacientes"))
    }

    //add um novo obejeto no arry criado
    let data = obterDataAgendamento();
    let paciente = {
        nome: nomeInput.value, 
        datanascimento: dataNascimentoInput.value, 
        sexo: sexoInput.value, 
        cpf: cpfInput.value, 
        telefone: telefoneInput.value,
        dataAgendamento : data
    }
    pacientes.push(paciente);
    
    //salva no localstorage
    localStorage.setItem("pacientes",JSON.stringify(pacientes))
    
    //envio do for e redirecionamento
    form.submit();
    window.location.href = "/pages/confirmado.html";
})

function obterDataAgendamento() {
    let date =  JSON.parse(localStorage.getItem("datas"));
    return date;
}

obterDataAgendamento();