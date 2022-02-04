
export const Avatar = ({ size = 80 }: { size?: number; }) => (
  <div
    style={{
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor: "#9BA5AE",
      marginRight: 10,
    }} />
);
