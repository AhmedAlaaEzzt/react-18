import { ReactNode } from "react";
interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="border-2 p-2 rounded shadow-md">{children}</div>;
};
