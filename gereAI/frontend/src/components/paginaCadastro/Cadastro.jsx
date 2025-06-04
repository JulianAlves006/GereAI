import styles from "./Cadastro.module.css";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useRef } from "react";


function Cadastro() {
  const inputNome = useRef()
  const inputEmail = useRef()
  const inputCelular = useRef()
  const inputNascimento = useRef()
  const inputSenha = useRef()
  const inputSenha2 = useRef()

  async function cadastrarUsuario() {
    await api.post("/cadastro", {
      nome: inputNome.current.value,
      email: inputEmail.current.value,
      celular: inputCelular.current.value,
      nascimento: inputNascimento.current.value,
      senha: inputSenha.current.value,
      senha2: inputSenha2.current.value,
    });
  }

  return (
      <div className={styles.container}>
        <h1 className={styles.titulo}>Faça seu Cadastro</h1>
        <form className={styles.formulario}>
          <div className={styles.linha}>
            <div className={styles.campo}>
              <label className={styles.rotulo}>
                Nome completo <span>*</span>
              </label>
              <input ref={inputNome} className={styles.input} type="text" placeholder="Fulano de tal" required />
            </div>
            <div className={styles.campo}>
              <label className={styles.rotulo}>
                Email <span>*</span>
              </label>
              <input ref={inputEmail} className={styles.input} type="email" placeholder="exemplo@email.com" required />
            </div>
          </div>

          <div className={styles.linha}>
            <div className={styles.campo}>
              <label className={styles.rotulo}>
                Celular <span>*</span>
              </label>
              <input ref={inputCelular} className={styles.input} type="tel" placeholder="(22) 92222-2222" required />
            </div>
            <div className={styles.campo}>
              <label className={styles.rotulo}>Data de nascimento</label>
              <input ref={inputNascimento} className={styles.input} type="date" />
            </div>
          </div>

          <div className={styles.linha}>
            <div className={styles.campo}>
              <label className={styles.rotulo}>
                Senha <span>*</span>
              </label>
              <input ref={inputSenha} className={styles.input} type="password" placeholder="Senha" required />
            </div>
            <div className={styles.campo}>
              <label className={styles.rotulo}>
                Confirme sua senha <span>*</span>
              </label>
              <input ref={inputSenha2} className={styles.input} type="password" placeholder="Senha" required />
            </div>
          </div>

          <button type="submit" onClick={cadastrarUsuario}>Cadastrar</button>

          <p className={styles.info}>
            Somente o que estiver marcado com <span>*</span> é obrigatório
          </p>
          <p className={styles.login}>
            Já tem um cadastro? <Link to="/login">Faça seu login aqui</Link>
          </p>
        </form>
      </div>
  );
}

export default Cadastro;
