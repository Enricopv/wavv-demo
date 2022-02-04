import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { useQuery } from "react-query";

export const FileShareButton = () => {
  const { status, data, error, isFetching } = useQuery(
    "images",
    async () => {
      const res = await axios.get("/api/getImages");
      return res.data;
    },
    {
      // Refetch the data every second
      refetchInterval: 1000,
    }
  );

  console.log("data", data);

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
            <Dialog.Title>Fileshare</Dialog.Title>

            <div
              style={{
                minHeight: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>There is nothing here.</div>
            </div>
            <div
              style={{
                backgroundColor: "#0074F4",
                padding: "12px 8px",
                textAlign: "center",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              Request Files
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
