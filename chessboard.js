const colors = require("colors");
exports.chessBoardArr = [
  [
    " - ".bgGray.gray,
    " a ".bgGray.black,
    " b ".bgGray.black,
    " c ".bgGray.black,
    " d ".bgGray.black,
    " e ".bgGray.black,
    " f ".bgGray.black,
    " g ".bgGray.black,
    " h ".bgGray.black,
    " - ".bgGray.gray,
  ],
  [
    " 8 ".bgGray.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " 8 ".bgGray.black,
  ],
  [
    " 7 ".bgGray.black,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " 7 ".bgGray.black,
  ],
  [
    " 6 ".bgGray.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " 6 ".bgGray.black,
  ],
  [
    " 5 ".bgGray.black,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " 5 ".bgGray.black,
  ],
  [
    " 4 ".bgGray.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " 4 ".bgGray.black,
  ],
  [
    " 3 ".bgGray.black,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " 3 ".bgGray.black,
  ],
  [
    " 2 ".bgGray.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " 2 ".bgGray.black,
  ],
  [
    " 1 ".bgGray.black,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " - ".bgBlack.black,
    " - ".bgWhite.white,
    " 1 ".bgGray.black,
  ],
  [
    " - ".bgGray.gray,
    " a ".bgGray.black,
    " b ".bgGray.black,
    " c ".bgGray.black,
    " d ".bgGray.black,
    " e ".bgGray.black,
    " f ".bgGray.black,
    " g ".bgGray.black,
    " h ".bgGray.black,
    " - ".bgGray.gray,
  ],
];

exports.getLetter = (letter) => {
  switch (letter.toLowerCase()) {
    case "a":
      return 1;
    case "b":
      return 2;
    case "c":
      return 3;
    case "d":
      return 4;
    case "e":
      return 5;
    case "f":
      return 6;
    case "g":
      return 7;
    case "h":
      return 8;
    default:
      return 0;
  }
};
