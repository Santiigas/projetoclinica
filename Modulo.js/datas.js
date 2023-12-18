//informacoes data
const segunda = document.getElementById("segunda")
const terca = document.getElementById("terca")
const quarta = document.getElementById("quarta")
const quinta = document.getElementById("quinta")
const sexta = document.getElementById("sexta")
const sabado = document.getElementById("sabado")

segunda.addEventListener('click', () => {
    let date = {
        dia : "Segunda",
        horario : "13:00",
        data: "08/01/2024",
    }
    exportDate(date)
})

terca.addEventListener('click', () => {
    let date = {
        dia : "Terca",
        horario : "13:00",
        data: "09/01/2024",
    }
    exportDate(date)
})

quarta.addEventListener('click', () => {
    let date = {
        dia : "Quarta",
        horario : "13:00",
        data: "10/01/2024",
    }
    exportDate(date)
})

quinta.addEventListener('click', () => {
    let date = {
        dia : "Quinta",
        horario : "08:00",
        data: "11/01/2024",

    }
    exportDate(date)
})

sexta.addEventListener('click', () => {
    let date = {
        dia : "Sexta",
        horario : "08:00",
        data: "12/01/2024",

    }
    exportDate(date)
})

sabado.addEventListener('click', () => {
    console.log("oi");
    let date = {
        dia : "Sábado",
        horario : "08:00",
        data: "13/01/2024",

    }
    exportDate
    exportDate(date);
})

function exportDate(date) {
    localStorage.setItem("datas",JSON.stringify(date))
    window.location.href = "/pages/agendamento.html";
}
