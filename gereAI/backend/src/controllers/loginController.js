const crypto = require('crypto');

function cripitografar(dados) {
  const hash = crypto.createHash('sha256');
  hash.update(dados);
  return hash.digest('hex');
}