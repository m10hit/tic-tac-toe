import React, { useState } from 'react';
import { ISquareProps } from './';

const Square = ({ handleClick, symbol }: ISquareProps) => {
  return (
    <div
      className="bg-slate-400 m-1 p-16 h-52 w-52 text-white text-3xl flex justify-center items-center"
      onClick={handleClick}
    >
      {symbol}
    </div>
  );
};

export default Square;
