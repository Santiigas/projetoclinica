//Mascara data
export function MascaraData(dataNascimentoInput){
    dataNascimentoInput.addEventListener('keypress', () => {
        let dataNascimentolength = dataNascimentoInput.value.length

        if(dataNascimentolength === 2 || dataNascimentolength === 5){
            dataNascimentoInput.value += '/'
        } 
    })
}

//Mascara do CPF
export function MascaraCPF(cpfInput){
    cpfInput.addEventListener('keypress', () => {
        let cpflength = cpfInput.value.length

        if(cpflength === 3 || cpflength === 7){
            cpfInput.value += '.'
        } else if (cpflength === 11){
            cpfInput.value += '-'
        }
    })
}

//Mascara do telefone
export function MascaraTelefone(telefoneInput){
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
}