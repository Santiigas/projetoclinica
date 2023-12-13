import {dadostelapaciente} from '../index.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('brasill')
    document.getElementById("paciente").innerHTML = dadostelapaciente[0];
});