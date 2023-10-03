class Paciente {
    constructor(nome, data_nascimento, sexo, cpf, telefone){
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.sexo = sexo
        this.cpf = cpf
        this.telefone = telefone
    }

    pagar(){
        console.log(`${this.nome} pagou a consulta!`)
    }
}

const paciente1 = new Paciente("Santiago", 
"16022003", "Masculino", "07212832502", "075981082730")

console.log(paciente1)
console.log(paciente1.pagar())