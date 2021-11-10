var MensagemInicial = 'seja bem vindo ao microondas super veloz\n';
var MensagemUsuario = 'escolha uma das comidas\n Pipoca\n Macarrao\n Carne\n feijao\n brigadeiro\n';

console.log(MensagemInicial);
console.log(MensagemUsuario);


function microondas(prato, tempo) {
    let mensagemok = 'Prato pronto, bom apetite!!!".';
    let ensagem2x = 'comida queimou';
    let mensagem3x = 'kabumm';
    let mensagemmenor = 'tempo insuficiente';
    let mensagemerro = 'Prato inexistente';
    switch(Pipoca, 10) {
        case 'Pipoca' :
          if (tempo = 10) {
                mensagemok;
                if (tempo =20 ) {
                    mensagem2x
                    if (tempo>30) {
                        mensagem3x
                    } else {
                        if (tempo<10) {
                            mensagemmenor
                        } else {
                            
                        }
                        
                    }
                } else {
                    
                }
            }
        break;
        case 'Macarrao' :
            if (tempo = 8) {
                mensagemok;
                if (tempo =16 ) {
                    mensagem2x
                    if (tempo>24) {
                        mensagem3x
                    } else {
                        if (tempo<8) {
                            mensagemmenor
                        } else {
                            
                        }
                        
                    }
                } else {
                    
                }
            }
        break;
        case 'Carne' :
            if (tempo = 15) {
                mensagemok;
                if (tempo =30 ) {
                    mensagem2x
                    if (tempo>45) {
                        mensagem3x
                    } else {
                        if (tempo<15) {
                            mensagemmenor
                        } else {
                            
                        }
                        
                    }
                } else {
                    
                }
            }
        break; 

        case 'Feijao' :
            if (tempo = 12) {
                mensagemok;
                if (tempo =24 ) {
                    mensagem2x
                    if (tempo>36) {
                        mensagem3x
                    } else {
                        if (tempo<12) {
                            mensagemmenor
                        } else {
                            
                        }
                        
                    }
                } else {
                    
                }
            }
        break;
        case 'Brigadeiro' :
            if (tempo = 12) {
                mensagemok;
                if (tempo =24 ) {
                    mensagem2x
                    if (tempo>36) {
                        mensagem3x
                    } else {
                        if (tempo<12) {
                            mensagemmenor
                        } else {
                            
                        }
                        
                    }
                } else {
                    
                }
            }
        break;  
        default :
            mensagemerro;
    }

      return mensagemerro;

}

console.log(microondas);

