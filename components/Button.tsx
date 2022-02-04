import React from "react";


export const Button = (props: { children?: React.ReactNode; }) => {
  return (
    <div
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
