import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LineItem } from "../components/LineItem";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Wavv!</a>
          </h1>

          <div style={{ height: 150 }} />

          <div className={styles.grid}>
            {[0, 1, 2, 3].map((item, index) => (
              <LineItem key={index} listen={index === 0 ? 2000 : false} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
