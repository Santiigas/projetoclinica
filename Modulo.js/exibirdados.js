function obterDadosDaUrl() {
    let dados =  JSON.parse(localStorage.getItem("pacientes"));
    console.log(dados);
    return dados[dados.length - 1];
}

function exibirDados(){
    const dadosPaciente = obterDadosDaUrl();
    console.log(dadosPaciente)

    const nomeElement = document.getElementById("paciente");
    const cpfeDataElement = document.getElementById("nascimentoCpf");
    const telefoneElement =  document.getElementById("telefone");
    const dataElement =  document.getElementById("data");
    const protocoloedata = document.getElementById("protocoloedata");
    const data = dadosPaciente.dataAgendamento;

    nomeElement.innerHTML = dadosPaciente.nome;
    cpfeDataElement.textContent = `Nasc: ${dadosPaciente.datanascimento} | CPF: ${dadosPaciente.cpf}`;
    telefoneElement.textContent = `Tel: ${dadosPaciente.telefone}`
    dataElement.textContent = `${data.dia} dia 18/12 as ${data.horario}`
    protocoloedata.textContent = "Protocolo:" + " " + `${dadosPaciente.protocolo}` + " | Data:" + `${dadosPaciente.dataAtual}` + " as " + `${dadosPaciente.horaAtual}`
}

exibirDados();