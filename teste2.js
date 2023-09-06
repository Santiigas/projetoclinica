const data = "05092023"

function VerificaData(data){
    
    var dia = data[0] + data[1]
    var diavalue = parseInt(dia)

    var mes = data[2] + data[3]
    var mesvalue = parseInt(mes)

    var ano = data[4] + data[5] + data[6] + data[7]
    var anovalue = parseInt(ano)

    function verificaMes(){
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
            if(anoBissexto() === false){
                if((diavalue >= 1 && diavalue <=28) === false){
                    console.log('Errado')
                    return false
                }
            } else if(anoBissexto() === true){
                if((diavalue >= 1 && diavalue <=29) === false){
                    console.log('Errado')
                    return false
                }
            }
        } else{
            console.log('errado')
            return false
        }
        
        console.log('Tudo certo mes') 
    }

    
    function VerificarAno(){
        const date = new Date();
        let anoatual = date.getFullYear()
        let diaatual = date.getDate()
        let mesatual = date.getMonth()

        if(anovalue > anoatual){
            console.log('Pacinete n nasceu // ano')
            return false    
        } else if(anovalue === anoatual && mesvalue >= mesatual){
            console.log('Pacinete n nasceu // mes')
            return false    
        } else if(anovalue === anoatual && mesvalue <= mesatual && diavalue > diaatual){
            console.log('Pacinete n nasceu // dia')
            return false    
        }

        console.log("tudo certo ano")
    }

    function anoBissexto() {
    
        if ((anovalue % 4) === 0){
            if((anovalue % 100) != 0){
                return true
            } else if((anovalue % 400) != 0){
                return false
            } else{
                return true
            }
        } else{
            return false
        }
    
    }

    verificaMes()
    VerificarAno()

}


VerificaData(data)

