import React, { FC } from "react";
import { Button as BaseButton, ButtonProps as AntdButtonProps } from "antd";
import classNames from "classnames";

import "./Button.scss";

interface CustomButtonProps extends AntdButtonProps {
  className?: string;
}

const Button: FC<CustomButtonProps> = (props) => (
  <BaseButton
    {...props}
    className={classNames("button", props.className, {
      button__large: props.size === "large",
    })}
  />
);

export default Button;
