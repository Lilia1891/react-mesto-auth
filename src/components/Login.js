import React, { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();
    const resetForm = () => {
      setEmail("");
      setPassword("");
      setMessage("");
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email||!password) {
          return
      }
      mestoAuth
      .authorize(email, password)
      .then((data) => {
          if(!data) {
              setMessage('Что-то пошло не так')
          }
        if (data.jwt)  {
            resetForm();
            handleLogin();
            history.push("/");
        }
         
        })
        .catch((err) => {
          setMessage(err.message || "Что-то пошло не так! Попробуйте еще раз");
        });
    };
  
    return (
      <div className="login">
        <form className="login__form">
          <h1 className="login__title">Вход</h1>
          <input
            id="email"
            value={email}
            type="email"
            className="login__input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            value={password}
            type="password"
            className="login__input"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__btn">
            Войти
          </button>
        </form>
      </div>
    );
  };
  export default withRouter(Login);
  
};
