import React from "react";

export const Button = (props: {
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor: "#0074F4",
        padding: "12px 8px",
        textAlign: "center",
        borderRadius: 10,
        cursor: "pointer",
      }}
    >
      {props.children}
    </div>
  );
};
