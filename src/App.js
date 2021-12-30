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
      // Jump to a certain step within the current game 
      this.setState({
        nmrOfMoves: step,
        xIsNext: (step % 2) === 0
      });
    }

    const onClick = (e) => {
      // Main onClick function

      if (e.target.className === 'startGameBtn') {
        // Starts a game as long as there is a gamemode selected by the user
        this.setState({ gameFinished: false });
        if (this.state.gamemode) {
          this.setState({ gameStarted: true });
        }
        else alert('Select Gamemode To Start Game!');
      }

      if (e.target.className === 'mainMenuBtn') {
        // Resets all values and brings the user back to the preview view 
        this.setState({ 
          history: [{ squares: Array(9).fill(null) }],
          nmrOfMoves: 0,
          gameStarted: false,
          userIsO: false,
          userIsX: false,
          gamemode: '',
          gameTied: false,     
        });
      }

      if (e.target.className === 'replayBtn') {
        // Resets the values of a game to allow the user to play once again 
        this.setState({ 
          history: [{ squares: Array(9).fill(null) }],
          nmrOfMoves: 0,
          gameTied: false,
        });
      }

      if (e.target.className === 'historyTrigger' || e.target.className === 'closeViewBtn') {
        // Takes care of bringing and collapsing the history view in the smaller viewports 
        this.setState({ historyViewTrggrd: !this.state.historyViewTrggrd });
      }

      if (e.target.className === 'playerOne') {
        // Selects player one and allows the user to start with "X"
        this.setState({ userIsX: true });
        this.setState({ userIsO: false });
        this.setState({ xIsNext: true });
      }

      if (e.target.className === 'playerTwo') {
        // Selects player one and allows the user to start with "O"
        this.setState({ userIsO: true });
        this.setState({ userIsX: false });
        this.setState({ xIsNext: false });
      }

      if (e.target.className === 'twoPlayerGame') {
        // Sets the gamemode value
        this.setState({ gamemode: 'multiplayer'});
      }

      if (e.target.className === 'singlePlayerGame') {
        // Sets the gamemode value
        this.setState({ gamemode: 'singleplayer'});
      }

     
    }

    const handleGameClick = async (i) => {
      // Main click function for the gameboard
      if (this.state.gamemode === 'multiplayer') {
        // Allows two users to play the game and yields a winner
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
        // Allows the user to play the game against a simple CPU and yields a winner
        const hist = this.state.history.slice(0, this.state.nmrOfMoves + 1);
        const currentMove = hist[hist.length - 1];
        const squares = currentMove.squares.slice();
        const userOption = this.state.userIsX ? 'X' : this.state.userIsO ? 'O' : null;
        const cpuOption = userOption === 'X' ? "O" : userOption === 'O' ? 'X' : null;
        let cpuMove = Math.floor(Math.random() * squares.length);
       
        const checkMove = () => {
          try {
            if (squares[cpuMove]) {
              cpuMove = Math.floor(Math.random() * squares.length);
              checkMove();
            }
            else {
              squares[cpuMove] = cpuOption;
              if (this.state.userIsO) { this.setState({ xIsNext: true }); }
              if (this.state.userIsX) { this.setState({ xIsNext: false }); }
            }
          } catch {
            squares[cpuMove] = userOption;
            this.setState({ gameFinished: true });
          }
        }

        if ( calculateWinner(squares) || squares[i] ) { return; }
        else { checkMove(); };

        squares[i] = await userOption;

        const areAllSquaresFilled = (square) => square !== null;
        console.log(squares.every(areAllSquaresFilled));
        if (squares.every(areAllSquaresFilled) && !calculateWinner(squares)) {
          this.setState({ gameTied: true });
        }

        this.setState({
          history: hist.concat([{ squares: squares, }]),
          nmrOfMoves: hist.length,
          xIsNext: !this.state.xIsNext,
        })
        
      }
    }

    const calculateWinner = (squares) => {
      // Calculates the winner if the values within squares have an existing combination. 
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

    const checkIfHistoryTrggrd = () => this.state.historyViewTrggrd ? ' active' : ''; // takes care of bringing the history view up (Smaller viewports)

    // Main Variables
    const history = this.state.history;
    const current = history[this.state.nmrOfMoves];
    const winner = calculateWinner(current.squares);
    let status, gameFinished = false;

    // Takes care of showing the result of the current game 
    if (this.state.gameTied) { gameFinished = true; }

    if (winner) {
      gameFinished = true;
      status = `Winner: ${winner}`
    }
    else status = `Next Player: ${this.state.xIsNext ? "X" : "O"} `;

    const moves = history.map((step, move) => {
      // Brings each move made by the users to view in the history view 
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return ( <p className='indPastMove' onClick={() => jumpTo(move)} key={'past move ' + move}>{desc}</p> );
    })

    // Functions that take care of showing user input within the preview view
    const userPickedX = () => this.state.userIsX ? ' active' : '';
    const userPickedO = () => this.state.userIsO ? ' active' : '';
    const gamemodeIsOne = () => this.state.gamemode === 'singleplayer' ? ' active' : '';
    const gamemodeIsMulti = () => this.state.gamemode === 'multiplayer' ? ' active' : '';

    return (
      <div className="container">
        
        { this.state.gameStarted ? 
          <div className='mainGameView'>
            <div className='navBar'>
              <p className='winnerHeading'>{this.state.gameTied ? 'Winner: Tie!' : status}</p>
  
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
