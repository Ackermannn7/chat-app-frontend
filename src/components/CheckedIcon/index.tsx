import React, { FC } from "react";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

interface CustomIconProps {
  isMe?: boolean;
  isChecked?: boolean;
}

const CheckedIcon: FC<CustomIconProps> = ({ isMe, isChecked }) => {
  return (
    (isMe &&
      (isChecked ? (
        <img
          className="message__icon-readed"
          src={readedSvg}
          alt="Readed icon"
        />
      ) : (
        <img
          className="message__icon-readed message__icon-readed--no"
          src={noReadedSvg}
          alt="No readed icon"
        />
      ))) ||
    null
  );
};

export default CheckedIcon;
