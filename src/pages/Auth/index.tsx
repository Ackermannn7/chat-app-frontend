import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Auth.scss";

import { LoginForm, RegisterForm } from "../../modules";

const Auth = () => {
  const path = window.location.pathname; // Получаем текущий путь
  // Используем условные операторы для выбора компонента в зависимости от пути
  let content;
  if (path === "/signin") {
    content = <LoginForm />;
  } else if (path === "/signup") {
    content = <RegisterForm />;
  } else {
    // По умолчанию можно рендерить, например, пустой div или другой компонент
    content = <div>Страница не найдена</div>;
  }

  return (
    <section className="auth">
      <div className="auth__content">{content}</div>
    </section>
  );
};

export default Auth;
