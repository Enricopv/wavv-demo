import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/image";
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
      refetchInterval: 2000,
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
              {!data?.data || !data?.data[0] ? (
                <div>There is nothing here.</div>
              ) : (
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
                )
              )}
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

/**
 *
 * {
    "data": [
        {
            "id": 102,
            "name": "dog",
            "url": "https://api.twilio.com/2010-04-01/Accounts/AC08d97a2bdb942feee45b409adecc567a/Messages/MMe80345fff48bad8fb57771d2f69f04ce/Media/ME30bf92b5357f5809eec6ae24eab4d5a2",
            "userId": 1
        },
        {
            "id": 101,
            "name": "test",
            "url": "https://api.twilio.com/2010-04-01/Accounts/AC08d97a2bdb942feee45b409adecc567a/Messages/MM4f1e4a983e7dfe76c0d6df4c918e3613/Media/MEd1362f0a148b3445ea7c5884d8725843",
            "userId": 1
        },
        {
            "id": 2,
            "name": "",
            "url": "https://api.twilio.com/2010-04-01/Accounts/AC08d97a2bdb942feee45b409adecc567a/Messages/MM6a0413a8f1038d91e2b641f8de126e2e/Media/ME0d0eff6d7aeb8c1ee471e887376321cb",
            "userId": 1
        },
        {
            "id": 3,
            "name": "",
            "url": "https://api.twilio.com/2010-04-01/Accounts/AC08d97a2bdb942feee45b409adecc567a/Messages/MM48473c5229a4f4c5d174343b5062f40c/Media/ME91fbd702afa8899fe9d33412deef0027",
            "userId": 1
        }
    ]
}
 */
