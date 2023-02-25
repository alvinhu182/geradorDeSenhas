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
  let novaSenha = gerarSenha(tamanhoSenha);
   let pass =  document.getElementById("senhaGerada");
   pass.innerHTML = novaSenha
  document.getElementById("copy").onclick = function() {
      var text = novaSenha
      console.log(text)
   
      if(novaSenha != '') {
      navigator.clipboard.writeText(text)
      .then(() => {
          console.log('Text copied to clipboard');
          alert('senha copiada')
          pass.innerHTML = '' 
          novaSenha = ''
         
      })
      .catch(err => {
          console.error('Error in copying text: ', err);
      });
  } else {
      alert('Voce não gerou uma senha')
  }
}});