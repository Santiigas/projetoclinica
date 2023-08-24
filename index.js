const form = document.querySelector("#form")
const nomeInput = document.querySelector('#name')
const dataNascimentoInput = document.querySelector('#data_nascimento')
const sexoInput = document.querySelector('#sexo')
const cpfInput = document.querySelector("#cpf")


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


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    /*
    if(validaNome(nomeInput.value) === false){
        alert("Por favor, preencha o seu nome");
        return;
    }*/
    
    const dataNascimentoInputValue = dataNascimentoInput.value.replace(/\/|-/g,"")
    if(validaData(dataNascimentoInputValue) === false){
        alert("Por favor, preencha a data de nascimento");
        return;
    }

    /*
    if(sexoInput.value === ""){
        alert('Preencha o sexo')
        return;
    }

    const cpfValue = cpfInput.value.replace(/\.|-/g,"")
    if(validaCPF(cpfValue) === false){
        alert("Invalido")
        return;
    }*/


    form.submit();
    console.log(dataNascimentoInput.value)
    alert("Enviado!")
})

function validaCPF(cpf){

    let soma = 0;
    soma += cpf[0] * 10;
    soma += cpf[1] * 9;
    soma += cpf[2] * 8;
    soma += cpf[3] * 7;
    soma += cpf[4] * 6;
    soma += cpf[5] * 5;
    soma += cpf[6] * 4;
    soma += cpf[7] * 3;
    soma += cpf[8] * 2;
    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 11)
        soma = 0;

    if(soma != cpf[9])
        return false;

    soma = 0;
    soma += cpf[0] * 11;
    soma += cpf[1] * 10;
    soma += cpf[2] * 9;
    soma += cpf[3] * 8;
    soma += cpf[4] * 7;
    soma += cpf[5] * 6;
    soma += cpf[6] * 5;
    soma += cpf[7] * 4;
    soma += cpf[8] * 3;
    soma += cpf[9] * 2;
    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 11)
        soma = 0;

    if(soma != cpf[10])
        return false;

    return true;
} 

function validaNome(nome){

    if(nome.trim() === ""){
        console.log('Nome vazio')
        return false
    }

    var padrao = /^[a-zà-ú]+(?: [a-zà-ú]+)*$/i;

    if(!padrao.test(nome )){
        console.log("Nome possui caracteres inválidos ou é vazio")
        return false
     }else{
        console.log("Nome Ok!")
        return true
     }
}

function validaData(data){
    return /^\d+$/.test(data)
}
