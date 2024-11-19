function verificarNumero() {
    const numero = parseInt(document.getElementById('numero').value);
    const mensagem = document.getElementById('mensagem');
  
    if (isNaN(numero)) {
      mensagem.textContent = "Por favor, digite um número válido.";
      return;
    }
  
    if (numero % 2 === 0) {
      mensagem.textContent = `Você digitou o número ${numero}. Esse número é par.`;
    } else {
      mensagem.textContent = `Você digitou o número ${numero}. Esse número é ímpar.`;
    }
  }
  