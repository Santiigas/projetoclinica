const data = "01012003"

function VerificaData(data){
    var mes = data[2] + data[3]
    var mesvalue = parseInt(mes)
    if(mesvalue >= 1 && mesvalue <= 12){
        console.log("Mes Valido")
    } else{
        console.log('Mes Invalido')
    }

    var dia = data[0] + data[1]
    var diavalue = parseInt(dia)
    if (diavalue >= 1 && diavalue <=31){
        console.log('Dia valido')
    } else{
        console.log('Dia invalido')
    }

    meses31 = [1, 3, 5, 7, 8, 10, 12]
    

}   

VerificaData(data)
