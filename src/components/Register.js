import React, { useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

//import * as auth from '../Auth.js';
//import './styles/Register.css';

const Register = ({ onRegister }) => {
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
    onRegister({ password, email })
      .then(resetForm)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        setMessage(err.message || "Что-то пошло не так! Попробуйте еще раз");
      });
  };

  return (
    <div className="register">
      <form className="register__form">
        <h1 className="register__title">Регистрация</h1>
        <input
          id="email"
          value={email}
          type="email"
          className="register__input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          value={password}
          type="password"
          className="register__input"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="register__btn">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin">
        <Link to="/sign-in" className="register__sign-in-link">
          Уже зарегистрированы? Войти
        </Link>
      </div>
    </div>
  );
};
export default withRouter(Register);
