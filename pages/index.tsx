import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LineItem } from "../components/LineItem";
import styles from "../styles/Home.module.css";

const wavLogo =
  "https://uploads-ssl.webflow.com/5f6930c8ec30f71b87fff35d/61ed92b565ce383e0ad4db6c_Main.png";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = PopoverPrimitive.Content;

const Home: NextPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#001828",
          height: 92,
          display: "flex",
          alignItems: "center",
          padding: '2rem'
        }}
      >
        <Image src={wavLogo} alt="Wavv Logo" width={113} height={22} />
      </div>
      <div className={styles.container}>
        <Head>
          <title>Wavv Fileshare</title>
          <meta name="description" content="Wavv Fileshare" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main
          style={{
            minHeight: "100vh",
            padding: "3rem 0",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Wavv!</a>
          </h1>

          <div style={{ height: 150 }} />

          <div className={styles.grid}>
            {[0, 2].map((item, index) => (
              <LineItem key={index} />
            ))}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
