import React, { useState } from 'react';
import Square from '../Square/Square';

const Board = () => {
  const [value, setValue] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (squareNumber: number) => {
    const turn = [...value];
    if (!turn[squareNumber]) turn[squareNumber] = isXTurn ? 'X' : 'O';
    setValue(turn);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="m-5">
      <div className="flex justify-center items-center">
        <Square handleClick={() => handleClick(0)} symbol={value[0]} />
        <Square handleClick={() => handleClick(1)} symbol={value[1]} />
        <Square handleClick={() => handleClick(2)} symbol={value[2]} />
      </div>
      <div className="flex justify-center items-center">
        <Square handleClick={() => handleClick(3)} symbol={value[3]} />
        <Square handleClick={() => handleClick(4)} symbol={value[4]} />
        <Square handleClick={() => handleClick(5)} symbol={value[5]} />
      </div>
      <div className="flex justify-center items-center">
        <Square handleClick={() => handleClick(6)} symbol={value[6]} />
        <Square handleClick={() => handleClick(7)} symbol={value[7]} />
        <Square handleClick={() => handleClick(8)} symbol={value[8]} />
      </div>
    </div>
  );
};

export default Board;
