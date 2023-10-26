import React, { FC } from "react";
import classNames from "classnames";
import { formatDistance } from "date-fns";
import { enGB, eo, ru } from "date-fns/locale";

import CheckedIcon from "../CheckedIcon";
import "./Message.scss";

interface CustomMessageProps {
  className?: string;
  user: { fullName: string; avatar?: string };
  text: string;
  date: string;
  isMe?: boolean;
  isChecked?: boolean;
  attachments?: Array<{ filename: string; url: string }>;
}

const Message: FC<CustomMessageProps> = ({
  user,
  text,
  date,
  isMe,
  isChecked,
  attachments,
}) => {
  const locales: Record<string, Locale> = { enGB, eo, ru };
  const baseDate = new Date(); // Текущая дата и время
  const localeId: string = "enGB"; // Уточнение типа
  return (
    <div className={classNames("message", { "message--isMe": isMe })}>
      <div className="message__content">
        <CheckedIcon isMe={isMe} isChecked={isChecked} />
        <div className="message__avatar">
          <img src={user.avatar} alt={user.fullName} />
        </div>
        <div className="message__info">
          <div>
            <div className="message__bubble">
              <p className="message__text">{text}</p>
            </div>
            <div className="message__attachments">
              {attachments &&
                attachments.map((item) => (
                  <div className="message__attachments-item">
                    <img src={item.url} alt={item.filename} />
                  </div>
                ))}
            </div>
            <span className="message__date">
              {formatDistance(new Date(date), baseDate, {
                addSuffix: true,
                locale: locales[localeId], // Используйте уточненный тип
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
