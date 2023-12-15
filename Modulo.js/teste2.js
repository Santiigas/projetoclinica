import { dados } from '../index.js';

document.addEventListener('DOMContentLoaded', function() {
    alert('eu')
    const dadosDoPaciente = dados();
    document.getElementById("paciente").innerHTML = dadosDoPaciente.join('<br>');
});