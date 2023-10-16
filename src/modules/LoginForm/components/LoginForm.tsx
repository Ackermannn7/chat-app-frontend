import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Button, PaperBlock } from "../../../components";

import { Link } from "react-router-dom";
const LoginForm = () => {
  //   const onFinish = (values: any) => {
  //     console.log("Success:", values);
  //   };

  //   const onFinishFailed = (errorInfo: any) => {
  //     console.log("Failed:", errorInfo);
  //   };

  //   type FieldType = {
  //     username?: string;
  //     password?: string;
  //     remember?: string;
  //   };
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <PaperBlock>
        <Form className="login-form">
          <Form.Item
          // validateStatus={validateField("email", touched, errors)}
          // help={!touched.email ? "" : errors.email}
          >
            <Input
              id="email"
              prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="E-Mail"
              // value={values.email}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
          // validateStatus={validateField("password", touched, errors)}
          // help={!touched.password ? "" : errors.password}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large">
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link to="/signup" className="auth__registerLink">
            Зарегистрироваться
          </Link>
        </Form>
      </PaperBlock>
    </div>
  );
};

export default LoginForm;
