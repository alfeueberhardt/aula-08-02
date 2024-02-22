const botões = document.querySelectorAll(".botão")

for( let i=0;i <botões.length;i++){
    botões[i].onclick = function(){
        botões[i].classList.add("ativo")

        for(let j=0;j<botões.length;j++){
            botões[j].classList.remove("ativo");
        }

        botões[i].classList.add("ativo")

    }
}