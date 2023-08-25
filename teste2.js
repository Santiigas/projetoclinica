const data = "16012003"

function VerificaData(data){
    var mes = data[2] + data[3]
    var mesvalue = parseInt(mes)
    if(mesvalue > 1 && mesvalue <= 12){
        console.log("Valido")
    } else{
        console.log('Invalido')
    }
}

VerificaData(data)
