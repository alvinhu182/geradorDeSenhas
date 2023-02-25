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
    
    
    const COPY = document.querySelector('#copy')
    COPY.addEventListener('click', () => {
        navigator.clipboard.writeText(novaSenha)
        alert('A senha foi copiada com sucesso')
      })
       
    
});


