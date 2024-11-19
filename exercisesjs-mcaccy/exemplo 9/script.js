let contador = 0

let res = document.getElementById(`resultado`);

function contar (){

	contador = contador + 1
    res.innerHTML = `<h1><p>O contador está com <mark>${contador}</mark> cliques.</p></h1>`
	}

function zerar(){
    contador = 0;
    res.innerHTML = `<h1><p> contador está com <mark>${contador}</mark> clique.</p></h1>`

}
