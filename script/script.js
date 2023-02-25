function gerarSenha(tamanho) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
  }
  const botaoGerarSenha = document.getElementById("gerarSenha");

  botaoGerarSenha.addEventListener("click", function() {
    const tamanhoSenha = document.getElementById("tamanhoSenha").value;
    const novaSenha = gerarSenha(tamanhoSenha);
    document.getElementById("senhaGerada").innerHTML = novaSenha;
  });

  document.getElementById("copy").onclick = function() {
    var text = document.getElementById("novaSenha").value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}

