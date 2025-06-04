import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

class Login extends Component {
  render() {
    return (
        <div className={styles.container}>
          <h1 className={styles.heading}>Faça seu Login</h1>
          <div className={styles.login_box}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" placeholder="exemplo@email.com" className={styles.input} />

            <label htmlFor="senha" className={styles.label}>Senha</label>
            <input type="password" id="senha" placeholder="Senha" className={styles.input} />

            <button>Logar</button>

            <p className={styles.cadastro}>
              Ainda não tem cadastro? <Link to="/cadastro">Cadastre-se aqui!</Link>
            </p>
          </div>
        </div>
    );
  }
}

export default Login;
