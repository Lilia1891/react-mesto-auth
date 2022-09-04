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
        history.push("/sign-in");
      })
      .catch((err) => {
        setMessage(err.message || "Что-то пошло не так! Попробуйте еще раз");
      });
  };

  return (
    <div className="register">
      <form
        className="popup__container popup__container_sign"
        onSubmit={handleSubmit}
      >
        <h1 className="popup__title popup__title_sign">Регистрация</h1>
        <input
          id="email"
          value={email}
          type="email"
          className="popup__input popup__input_sign"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          value={password}
          type="password"
          className="popup__input popup__input_sign"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="popup__submit-button popup__submit-button_sign"
        >
          Зарегистрироваться
        </button>
        <div className="register__signin">
          <Link to="/sign-in" className="register__signin">
            Уже зарегистрированы? Войти
          </Link>
        </div>
      </form>
    </div>
  );
};
export default withRouter(Register);
