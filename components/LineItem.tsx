import {
  faCommentAlt,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Avatar } from "./Avatar";
import { BlankLine } from "./BlankLine";
import { CheckBox } from "./CheckBox";
import { FileShareButton } from "./FileShareButton";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = PopoverPrimitive.Content;

export const LineItem = (props: { listen?: false | number }) => (
  <div
    style={{
      backgroundColor: "#F2F3F4",
      width: "100%",
      borderRadius: 10,
      padding: "30px 10px",
      marginBottom: 20,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <CheckBox />
        <Avatar size={50} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: 50,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <BlankLine />
            <BlankLine width={170} />
          </div>
          <div style={{ display: "flex", flexGrow: 1 }} />
          <div>
            <BlankLine width={180} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minWidth: 150,
        }}
      >
        <FileShareButton {...props} />
        <FontAwesomeIcon
          icon={faCommentAlt}
          style={{
            marginRight: 10,
          }}
          color="#9BA5AE"
        />

        <FontAwesomeIcon
          icon={faVoicemail}
          scale={2}
          style={{
            marginRight: 10,
          }}
          color="#9BA5AE"
        />
        <FontAwesomeIcon
          icon={faPhone}
          style={{
            marginRight: 10,
          }}
          color="#9BA5AE"
        />
      </div>
    </div>
  </div>
);
