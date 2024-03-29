export const findWinner = (board) => {
  const indexOfWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < indexOfWin.length; index++) {
    const [a, b, c] = indexOfWin[index];
    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], indexOfWin: [a, b, c] };
    }
  }
  return { winner: null };
};
