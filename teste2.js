function VerificaData(data){
    
    //pegar data/juntar/e transformar em inteiro
    var dia = data[0] + data[1]
    var diavalue = parseInt(dia)

    var mes = data[2] + data[3]
    var mesvalue = parseInt(mes)

    var ano = data[4] + data[5] + data[6] + data[7]
    var anovalue = parseInt(ano)

    function verificaMes(){
        //arrys com os meses do ano
        const meses31 = [1, 3, 5, 7, 8, 10, 12]
        const meses30 = [4, 6, 9, 11]

        //cada if verifica se o mes está dentro de uma das listas
        if(meses31.indexOf(mesvalue) > -1){
            //depois verifica se o dia é valido
            if((diavalue >= 1 && diavalue <=31) === false){
                return false
            }
        } else if(meses30.indexOf(mesvalue) > -1){
            if((diavalue >= 1 && diavalue <=30) === false) {
                return false
            }
        } else if(mesvalue === 2){
            if(anoBissexto() === false){
                if((diavalue >= 1 && diavalue <=28) === false){
                    return false
                }
            } else if(anoBissexto() === true){
                if((diavalue >= 1 && diavalue <=29) === false){
                    return false
                }
            }
        } else{
            return false
        }
        
        return true
    }

    
    function VerificarAno(){
        //datas atuais
        const date = new Date();
        let anoatual = date.getFullYear()
        let diaatual = date.getDate()
        let mesatual = date.getMonth() +1;

        //verifica se a data de nascimento é acima da data atual 
        if(anovalue > anoatual){
            return false    
        } else if(anovalue === anoatual && mesvalue > mesatual){
            return false    
        } else if(anovalue === anoatual && mesvalue === mesatual && diavalue > diaatual){
            return false    
        }

        return true
    }

    function anoBissexto() {
        //autoexplicativo
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

