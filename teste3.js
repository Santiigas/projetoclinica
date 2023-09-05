
const data = "29022004"


function VerificarAno(){
    const date = new Date();
    var anoatual = date.getFullYear();
    var diaatual = date.getDate()
    var mesatual = date.getMonth()

    console.log(typeof anoatual)
    var dataUsuario = diavalue + mesvalue + anovalue
    var dataAtual = diaatual + (mesatual + 1) + anoatual

    if(dataUsuario > dataAtual){
        console.log('Errado ano')
        return false
    }
    
    console.log('Tudo certo ano')
}

VerificarAno()