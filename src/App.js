import React, { Component } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      history: [{ squares: Array(9).fill(null) }],
      nmrOfMoves: 0,
      xIsNext: true, 
    };
  }


  render () {

    const jumpTo = (step) => {
      this.setState({
        nmrOfMoves: step,
        xIsNext: (step % 2) === 0
      });
    }

    const onClick = (e) => {
      console.log(e.target)

      if (e.target.className === 'startGameBtn') {
        this.setState({ gameFinished: false });
        this.setState({ gameStarted: true });
      }

      if (e.target.className === 'mainMenuBtn') {
        this.setState({ gameStarted: false });
      }

      if (e.target.className === 'historyTrigger' || e.target.className === 'closeViewBtn') {
        this.setState({ historyViewTrggrd: !this.state.historyViewTrggrd });
      }

      if (e.target.className === 'playerOne') {
        this.setState({ userIsX: true });
        this.setState({ userIsO: false });
        this.setState({ xIsNext: true });
      }

      if (e.target.className === 'playerTwo') {
        this.setState({ userIsO: true });
        this.setState({ userIsX: false });
        this.setState({ xIsNext: false });
      }

      if (e.target.className === 'twoPlayerGame') {
        this.setState({ gamemode: 'multiplayer'});
      }

      if (e.target.className === 'singlePlayerGame') {
        this.setState({ gamemode: 'singleplayer'});
      }
    }

    const handleGameClick = (i) => {
      if (this.state.gamemode === 'multiplayer') {
        const hist = this.state.history.slice(0, this.state.nmrOfMoves + 1);
        const currentMove = hist[hist.length - 1];
        const squares = currentMove.squares.slice();
  
        if ( calculateWinner(squares) || squares[i] ) return;
  
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: hist.concat([{ squares: squares, }]),
          nmrOfMoves: hist.length,
          xIsNext: !this.state.xIsNext,
        })
      }
      else if (this.state.gamemode === 'singleplayer') {
        alert('This is the CPU Vs user gamemode ');
      }
    }

    const calculateWinner = (squares) => {
      const winCombs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < winCombs.length; i++) {
        const [a, b, c] = winCombs[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) 
        return squares[a];
      }
      return null;
    }

    const checkIfHistoryTrggrd = () => this.state.historyViewTrggrd ? ' active' : '';

    const history = this.state.history;
    const current = history[this.state.nmrOfMoves];
    const winner = calculateWinner(current.squares);
    let status, gameFinished = false;

    if (winner) {
      gameFinished = true;
      status = `Winner: ${winner}`
    }
    else status = `Next Player: ${this.state.xIsNext ? "X" : "O"} `;

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return ( <p className='indPastMove' onClick={() => jumpTo(move)} key={'past move ' + move}>{desc}</p> );
    })

    const userPickedX = () => this.state.userIsX ? ' active' : '';
    const userPickedO = () => this.state.userIsO ? ' active' : '';
    const gamemodeIsOne = () => this.state.gamemode === 'singleplayer' ? ' active' : '';
    const gamemodeIsMulti = () => this.state.gamemode === 'multiplayer' ? ' active' : '';

    // console.log(Math.floor(Math.random() * 8) + 0)

    return (
      <div className="container">
        
        { this.state.gameStarted ? 
          <div className='mainGameView'>
            <div className='navBar'>
              <p className='winnerHeading'>{status}</p>
  
              <p className='historyTrigger' onClick={onClick}>History</p>
            </div>
  
            { gameFinished ? 
              <div className='gameEndOptions'>
                <p className='replayBtn' onClick={onClick}>Replay</p>
                <p className='mainMenuBtn' onClick={onClick}>Main Menu</p>
              </div>
            : null } 
            
  
            <Board squares={current.squares} onClick={(i) => handleGameClick(i)} />
          </div>
        : 
          <div className='previewView'>
            <div className='previewViewBtnsCntr'>
              <p className='previewVieHeading'>Tic-Tac-Toe.</p>

              <div className='chooseBtnsCntr'>
                <p className={'playerOne' + userPickedX()} onClick={onClick}>X</p>
                <p className={'playerTwo' + userPickedO()} onClick={onClick}>O</p>
              </div>

              <div className='chooseGmdeCntr'>
                <p className={'twoPlayerGame' + gamemodeIsMulti()} onClick={onClick}>Player Vs. Player</p>
                <p className={'singlePlayerGame' + gamemodeIsOne()} onClick={onClick}>CPU Vs. Player</p>
              </div>

              <p className='startGameBtn' onClick={onClick}>Start Game</p>
            </div>
          </div>
        }

  
        <div className={'historyView' + checkIfHistoryTrggrd()}>
          <div className='heading-btnCntr'>
            <div className='closeViewBtn' onClick={onClick}><BsFillArrowLeftCircleFill className='icon'/></div>
  
            <p className='historyViewHdng'>History</p>
          </div>
  
          <div className='indPastMovesCntr'>
            {this.state.gameStarted ? moves : ''}
          </div>
        </div> 
  
      </div>
    );
  }
}

export default App;
