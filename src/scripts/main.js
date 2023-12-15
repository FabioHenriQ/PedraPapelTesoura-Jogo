var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){
    let vencedor = document.querySelector('.vencedor');
    
    if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){         
            vencedor.innerHTML = "Empate";
        }else if(inimigoOpt == "tesoura"){          
            vencedor.innerHTML = "Você perdeu :(";
        }else if(inimigoOpt == "pedra"){         
            vencedor.innerHTML = "Você ganhou!";
        }
    }

    if(playerOpt == "tesoura"){
        if(inimigoOpt == "papel"){           
            vencedor.innerHTML = "Você ganhou!";
        }else if(inimigoOpt == "tesoura"){         
            vencedor.innerHTML = "Empate";
        }else if(inimigoOpt == "pedra"){       
            vencedor.innerHTML = "Você perdeu :(";
        }
    }

    if(playerOpt == "pedra"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Você perdeu :(";
        }else if(inimigoOpt == "tesoura"){     
            vencedor.innerHTML = "Você ganhou!";
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Empate";           
        }
    }
}

function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
       
    enemyOptions[i].childNodes[0].style.opacity = 0.3;
        
    }
}

function inimigoJogar(){

    let rand = Math.floor(Math.random()*3);
            
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
    });
}

            