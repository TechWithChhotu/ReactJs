import React, { useState } from "react";
import Card from "../cards/Card";
import isWinner from "../Winner/isWinner";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); //true ==> O || false ==> X
  const [winner, setWinner] = useState(null);
  let begTurn = turn;
  const play = (index) => {
    // if player is not wins
    if (!winner) {
      if (turn) {
        board[index] = "O";
      } else {
        board[index] = "X";
      }
    }

    const win = isWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(`${win} wins`);
    }
    setBoard([...board]);
    setTurn(!turn);
  };

  const resetGame = function () {
    setBoard(Array(numberOfCards).fill(""));
    setTurn(!begTurn);
    setWinner(null);
  };

  return (
    <div>
      {/* conditional randring if user win then rander winning otherwise turn */}
      {winner && (
        <h1 className="bg-gray-500 text-green-400 rounded-xl text-3xl border-b-2 border-green-500">
          Player {winner}
        </h1>
      )}
      {!winner && (
        <h1 className="bg-gray-500 text-red-500 rounded-xl text-3xl border-b-2 border-red-500">{`${
          turn ? "O" : "X"
        } Turn`}</h1>
      )}

      <br />
      <div className="bg-gray-500 p-5 rounded-lg grid grid-cols-3 gap-5">
        {board.map((el, idx) => (
          <Card
            key={idx}
            markIcon={turn}
            onPlay={play}
            index={idx}
            player={el}
          />
        ))}
      </div>

      <button
        className="bg-red-500 mt-4 pt-2 pb-2 pl-4 pr-4 rounded-lg cursor-pointer border-b-2 border-gray-300 hover:border-b-4 hover:bg-green-500"
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
}

export default Grid;
