const crypto = require('crypto');

function cripitografar(dados) {
  const hash = crypto.createHash('sha256');
  hash.update(dados);
  return hash.digest('hex');
}

exports.postCadastro = (req, res) => {
    const nome = req.body.nome?.trim();
    const email = req.body.email?.trim();
    const celular = req.body.celular?.trim();
    const nascimento = req.body.nascimento?.trim();
    const senha = req.body.senha?.trim();
    const senha2 = req.body.senha2?.trim();

    const validacao = nome != "" && email != "" && celular != "" && senha != "" && senha2 != "";

    if(validacao && senha == senha2){
        console.log(nome, email, celular, nascimento, cripitografar(senha), cripitografar(senha2));
    }
    else if(!validacao){
        console.log("Todas as informações precisam estar preenchidas.");
    }
    else if(senha != senha2){
        console.log("Senha está diferente");
    }
}