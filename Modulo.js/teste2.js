import { dados } from '../index.js';

document.addEventListener('DOMContentLoaded', function() {
    const nome = dados[0]
    console.log(nome)
    document.getElementById("paciente").innerHTML = nome;
});

