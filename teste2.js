const data = "16122003"

function VerificaData(data){
    var mes = data[2] + data[3]
    var mesvalue = parseInt(mes)
    if(mesvalue > 1 && mesvalue <= 12){
        console.log("Valido")
    } else{
        console.log('Invalido')
    }
    console.log(mes)
}

VerificaData(data)


//verificar o mes
// 30 31 28 - 3 possibilidades
//

/*
const data = "16002003"

function VerificaData(data){
    var mes = data[2] + data[3]
    var mesvalue = parseInt(mes)
    if(mesvalue > 1 && mesvalue <= 12){
        console.log("Valido")
    } else{
        console.log('Invalido')
    }
    console.log(mes)
    console.log(typeof mes)
    //console.log(meses_do_ano.includes(mes))
}

VerificaData(data)
*/