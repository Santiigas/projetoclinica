const form = document.querySelector("#form")
const nomeInput = document.querySelector('#name')
const dataNascimentoInput = document.querySelector('#data_nascimento')
const sexoInput = document.querySelector('#sexo')
const cpfInput = document.querySelector("#cpf")

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

    if(nomeInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }
    
    if(dataNascimentoInput.value === ""){
        alert("Por favor, preencha a data de nascimento");
        return;
    }

    if(!validaCPF(cpfInput)){
        alert('CPF invalido')
        return;
    }

    if(sexoInput.value === ""){
        alert('Preencha o sexo')
        return;
    }

    form.submit();
    alert("Eviado!")
})

function validaCPF(cpf = 0){
    console.log(cpf)
    cpf = cpf.replace(/\.|-/g,"");

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

    console.log("Primero d: "+soma);

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
