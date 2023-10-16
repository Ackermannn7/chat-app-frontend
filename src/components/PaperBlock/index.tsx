import React, { ReactNode, FC } from "react";
import classNames from "classnames";

import "./PaperBlock.scss";

interface BlockProps {
  children: ReactNode;
  className?: string;
}

const Block: FC<BlockProps> = ({ children, className }) => (
  <div className={classNames("paperBlock", className)}>{children}</div>
);

export default Block;
