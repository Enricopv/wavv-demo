import Image from "next/image";

const wavLogo =
  "https://uploads-ssl.webflow.com/5f6930c8ec30f71b87fff35d/61ed92b565ce383e0ad4db6c_Main.png";

export const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#001828",
        height: 92,
        display: "flex",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Image src={wavLogo} alt="Wavv Logo" width={113} height={22} />
    </div>
  );
};
