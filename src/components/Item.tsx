import React from "react";

interface ItemProps {
  fun: () => void;
}
const Item = ({ fun }: ItemProps) => {
  console.log("Item Rendered");
  fun();
  return <></>;
};

export default React.memo(Item);
