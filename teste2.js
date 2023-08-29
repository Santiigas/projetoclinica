const data = "31122024"

function VerificaData(data){

    const date = new Date();
    var anoatual = date.getFullYear();

    var mes = data[2] + data[3]
    var mesvalue = parseInt(mes)
    var dia = data[0] + data[1]
    var diavalue = parseInt(dia)
    var ano = data[4] + data[5] + data[6] + data[7]
    var anovalue = parseInt(ano)
    meses31 = [1, 3, 5, 7, 8, 10, 12]
    meses30 = [4, 6, 9, 11]
    if(meses31.indexOf(mesvalue) > -1){
        if((diavalue >= 1 && diavalue <=31) === false){
            console.log('Errado')
            return false
        }
    } else if(meses30.indexOf(mesvalue) > -1){
        if((diavalue >= 1 && diavalue <=30) === false) {
            console.log('Errado')
            return false
        }
    } else if(mesvalue === 2){
        if((diavalue >= 1 && diavalue <=29) === false){
            console.log('Errado')
            return false
        }
    } else if((anovalue <= anoatual) === false){
        console.log('Errado')
        return false
    }
    console.log('Tudo certo')
}


VerificaData(data)
