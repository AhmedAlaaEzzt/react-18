import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return <div className="border-2 p-2 rounded shadow-md">{children}</div>;
};
