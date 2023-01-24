#!/usr/bin/env node

const { chessBoardArr, getLetter } = require("./chessboard");
const colors = require("colors");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const renderBoard = () => {
  header();
  for (let i = 0; i < 10; i++) {
    console.log(chessBoardArr[i].join(""));
  }
  footer();
};

const header = () => {
  console.log("------------------------------");
  console.log("          CHESS BOARD         ");
  console.log("------------------------------");
};

const footer = () => {
  console.log("------------------------------");
  console.log(" ♞ ".bgGreen, "- Knight Current Position");
  console.log(" * ".bgBrightRed, "- Knight Possible Place");
  console.log("------------------------------");
};

const getKnightFuturePos = (input) => {
  const moves = [
    [+1, +2],
    [+1, -2],
    [-1, +2],
    [-1, -2],
    [+2, +1],
    [+2, -1],
    [-2, +1],
    [-2, -1],
  ];

  moves.forEach((move) => {
    if (
      Number(input.x + move[0]) >= 1 &&
      Number(input.x + move[0]) <= 8 &&
      Number(input.y + move[1]) >= 1 &&
      Number(input.y + move[1]) <= 8
    ) {
      chessBoardArr[input.x + move[0]][input.y + move[1]] = " * ".bgBrightRed;
    }
  });
};

const setKnight = (letter, number) => {
  const num = Number(getLetter(letter));
  let input = {
    y: num,
    x: 9 - number,
  };
  chessBoardArr[input.x][input.y] = " ♞ ".bgGreen;
  getKnightFuturePos(input);
  renderBoard();
};

const askData = () => {
  readline.question(
    'Enter Knight Position? (Ex. "a1", "c5", "d7", etc..) :  '.yellow,
    (answer) => {
      const position = answer.split("");
      if (
        position.length !== 2 ||
        position[1] > 8 ||
        Number(getLetter(position[0])) === 0 ||
        !Boolean(Number(position[1]))
      ) {
        console.log(" Enter a valid Position for Knight! ".bgRed);
        askData();
      } else {
        readline.close();
        setKnight(position[0], position[1]);
      }
    }
  );
};

askData();
