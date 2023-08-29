const data = "30022003"

function VerificaData(data){
    var mes = data[2] + data[3]
    var mesvalue = parseInt(mes)
    var dia = data[0] + data[1]
    var diavalue = parseInt(dia)
    meses31 = [1, 3, 5, 7, 8, 10, 12]
    meses30 = [4, 6, 9, 11]
    if(meses31.indexOf(mesvalue) > -1){
        if(diavalue >= 1 && diavalue <=31){
            console.log('Data valida')
        } else{
            console.log('Data invalida')
        }
    } else if(meses30.indexOf(mesvalue) > -1){
        if(diavalue >= 1 && diavalue <=30){
            console.log('Data valida')
        } else{
            console.log('Data invalida')
        }
    } else if(mesvalue === 2){
        if(diavalue >= 1 && diavalue <=29){
            console.log('Data valida')
        } else{
            console.log('Data invalida')
        }
    } else{
        console.log("Data invalida")
    }
}   

VerificaData(data)
