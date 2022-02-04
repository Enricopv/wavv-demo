import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { Button } from "./Button";
import { DialogContainer } from "./DialogContainer";

export const FileShareButton = ({listen = false}: { listen?: false | number }) => {
  const { data } = useQuery(
    "images",
    async () => {
      const res = await axios.get("/api/getImages");
      return res.data;
    },
    {
      // Refetch the data every second
      refetchInterval: false,
    }
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger
        style={{
          border: "none",
          padding: 0,
          width: "100%",
          marginRight: 10,
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faFolder} style={{}} color="#21394D" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogContainer>
          <Dialog.Title>Fileshare</Dialog.Title>
          <div
            style={{
              minHeight: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!data?.data ||
              (!data?.data[0] && <div>There is nothing here.</div>)}

            {data?.data[0] &&
              data?.data.map(
                (file: { url: string; name: string }, index: number) => (
                  <Image
                    key={index}
                    src={file.url}
                    alt={file.name}
                    width="100%"
                    height="100%"
                  />
                )
              )}
          </div>

          <Button>Request Files</Button>
        </DialogContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
