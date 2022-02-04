import * as Dialog from "@radix-ui/react-dialog";
import React from "react";


export const DialogContainer = (props: { children: React.ReactNode; }) => (
  <Dialog.Overlay
    style={{
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.3)",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Dialog.Content
      style={{
        backgroundColor: "#001828",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90vw",
        maxWidth: "450px",
        maxHeight: "85vh",
        padding: 25,
        color: "white",
        borderRadius: 20,
      }}
    >
      {props.children}
    </Dialog.Content>
  </Dialog.Overlay>
);
