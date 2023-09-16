import { ReactNode, useState } from "react";


interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: String;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={onClick}>
        My button
      </button>
    </>
  );
};

export default Button;
