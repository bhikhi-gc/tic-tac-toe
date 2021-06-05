import React from "react";
import Board from "../components/Board";
import './Game.css'
import useSound from 'use-sound';
import victorySound from '../sounds/victory-sound.wav';
import ErrorBoundry from '../components/ErrorBoundry';

const Game = () => {
  const [play] = useSound(victorySound);
    return (
      <div className="game">
        <div className="game-board">
          <ErrorBoundry>
          <Board gameComplete={ () => {play()} }/>
          </ErrorBoundry>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}

export default Game;