import React, { useEffect, useState } from 'react';
import Square from '../Square/Square';

const Board = () => {
  const [value, setValue] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState<boolean | string>(false);
  useEffect(() => {
    winnerCheck();
  });

  const playerTurn = isXTurn ? 'X' : 'O';

  const winnerCheck = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winner of winnerLogic) {
      const [a, b, c] = winner;
      if (value[a] !== null && value[a] === value[b] && value[a] === value[c]) {
        setWinner(value[c] as string);
      }
    }
    return false;
  };

  const handleClick = (squareNumber: number) => {
    if (!winner) {
      const turn = [...value];
      if (!turn[squareNumber]) turn[squareNumber] = playerTurn;
      setValue(turn);
      setIsXTurn(!isXTurn);
    }
  };

  const restartGameHandler = () => {
    setValue(Array(9).fill(null));
    setWinner(false);
    setIsXTurn(true);
  };

  const renderSquares = (index: number) => {
    return (
      <Square handleClick={() => handleClick(index)} symbol={value[index]} />
    );
  };

  return (
    <div className="m-5 mt-10">
      <div className="flex justify-center font-bold">
        {winner ? `${winner} is the winner` : `Next Turn: ${playerTurn}`}
        {
          <button
            onClick={restartGameHandler}
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center ml-4 mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Play Again
          </button>
        }
      </div>
      <div className="flex justify-center items-center">
        {renderSquares(0)}
        {renderSquares(1)}
        {renderSquares(2)}
      </div>
      <div className="flex justify-center items-center">
        {renderSquares(3)}
        {renderSquares(4)}
        {renderSquares(5)}
      </div>
      <div className="flex justify-center items-center">
        {renderSquares(6)}
        {renderSquares(7)}
        {renderSquares(8)}
      </div>
    </div>
  );
};

export default Board;
