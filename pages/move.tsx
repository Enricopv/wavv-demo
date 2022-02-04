import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LineItem } from "../components/LineItem";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";
import * as React from "react";
/**
 *
 * Write a program that represents a robot moving around in two-dimensional space.


The program should take the following commands:


M: Move forward (1 space)
R: Turn right
L: Turn left

After every command, the program should output the robot's current position (in X and Y coordinates) and the direction in which the robot is currently facing.


The robot should start at coordinates X: 0, Y: 0, facing North.


For example, after issuing the following commands: M, M, R, M


The program should output: X: 1, Y: 2, facing East
 */
type Direction = "North" | "South" | "East" | "West";
type Movement = {
  d: Direction;
  x: number;
  y: number;
};

type Command = "R" | "L" | "M";

const MoveMap = {
  North: {
    L: "West",
    R: "East",
    M: {
      key: "y",
      val: 1,
    },
  },
  South: {
    L: "East",
    R: "West",
    M: {
      key: "y",
      val: -1,
    },
  },
  East: {
    L: "North",
    R: "South",
    M: {
      key: "x",
      val: 1,
    },
  },
  West: {
    L: "South",
    R: "North",
    M: {
      key: "x",
      val: -1,
    },
  },
};

const Move: NextPage = () => {
  const [history, setHistory] = React.useState<Movement[]>([
    { d: "North", x: 0, y: 0 },
  ]);

  const move = (command: Command) => {
    const recentMoment = history[history.length - 1];

    const currentHeading = recentMoment.d;
    if (command !== "M") {
      const newHeading = MoveMap[currentHeading][command] as Direction;
      const newHistory = [...history, { ...recentMoment, d: newHeading }];
      setHistory(newHistory);
    } else {
      const { key: axis, val } = MoveMap[currentHeading]["M"];
      setHistory([
        ...history,
        { ...recentMoment, [axis]: recentMoment[axis as "x" | "y"] + val },
      ]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Header />
        <div></div>
        {["M", "L", "R"].map((key, index) => (
          <div
            key={index}
            style={{
              width: 30,
              height: 30,
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "dodgerblue",
              color: "white",
            }}
            onClick={() => {
              move(key as Command);
            }}
          >
            {key}
          </div>
        ))}

        <pre>{JSON.stringify(history, null, 2)}</pre>

        <Footer />
      </div>
    </div>
  );
};

export default Move;
