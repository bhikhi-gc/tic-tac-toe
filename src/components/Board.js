import React from 'react';
import Square from "./Square";
import './Board.css';

const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
};

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isNextX: true,
      winnerX: 0,
      winnerO: 0
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) { 
      return; 
    }    
    squares[i] = this.state.xIsNext ? 'O' : 'X';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square 
      value={this.state.squares[i]} 
      onClick={ () => this.handleClick(i) }
      />
      );
  }

  render() {
      const winner = calculateWinner(this.state.squares);    
      let status='Let\'s play!';    
      if (winner) {    
        status = 'Winner: ' + winner + '\n New Game!';   
        this.state.squares.fill(null); 
        setTimeout(() => {
          this.props.gameComplete()
        }, 1000);   
        if(winner === 'X' ) {this.setState({winnerX: this.state.winnerX+1});}
        else {this.setState({winnerO: this.state.winnerO+1});} 
      } else {     
       status = 'Next player: ' + (this.state.xIsNext ? 'O' : 'X');    
     }
     
    return (
      <div>
        <table className="winnerBoard">
          <tbody><tr><th>X</th><th>Y</th></tr>
          <tr><td>{ this.state.winnerX }</td><td>{ this.state.winnerO }</td></tr></tbody>
        </table>
        <div className="status">{status}</div>
        <div className="board">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        </div>
      </div>
    );
  }

}



export default Board;