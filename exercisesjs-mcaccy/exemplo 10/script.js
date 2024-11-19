

let res = window.document.getElementById(`saída`);

function contar (){

	contador = contador + 1
    res.innerHTML = `<h1><p>O contador está com <mark>${contador}</mark> cliques.</p></h1>`
	}

function zerar(){
    contador = 0;
    res.innerHTML = `<h1><p> contador está com <mark>${contador}</mark> clique.</p></h1>`

}