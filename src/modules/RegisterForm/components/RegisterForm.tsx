import React from "react";
import {
  InfoCircleTwoTone,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";
import { Button, PaperBlock } from "../../../components";

import { Link } from "react-router-dom";
const RegisterForm = () => {
  const [isValidData, setIsValidData] = React.useState(false);
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
        <h2>Регистрация</h2>
        <p>Для входа в чат Вам нужно зарегистрироваться!</p>
      </div>
      <PaperBlock>
        {!isValidData ? (
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
            // validateStatus={validateField("email", touched, errors)}
            // help={!touched.email ? "" : errors.email}
            >
              <Input
                id="name"
                prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                placeholder="Name"
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
            <Form.Item
            // validateStatus={validateField("password", touched, errors)}
            // help={!touched.password ? "" : errors.password}
            >
              <Input.Password
                placeholder="Repeat Password"
                size="large"
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link to="/signin" className="auth__registerLink">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__successBlock">
            <div>
              <InfoCircleTwoTone />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На вашу почту отправлено письмо с ссылкой на подтвеждение
              аккаунта.
            </p>
          </div>
        )}
      </PaperBlock>
    </div>
  );
};

export default RegisterForm;
