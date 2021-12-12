import React, { Component } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
    };
  }


  render () {

    const onClick = (e) => {
      console.log(e.target)

      if (e.target.className === 'startGameBtn') {
        this.setState({ gameStarted: true });
      }

      if (e.target.className === 'mainMenuBtn') {
        this.setState({ gameStarted: false });
      }

      if (e.target.className === 'historyTrigger' || e.target.className === 'closeViewBtn') {
        this.setState({ historyViewTrggrd: !this.state.historyViewTrggrd });
      }
    }

    const checkIfHistoryTrggrd = () => this.state.historyViewTrggrd ? ' active' : '';

    console.log(this.state.gameStarted)

    return (
      <div className="container">
        
        { this.state.gameStarted ? 
          <div className='mainGameView'>
            <div className='navBar'>
              <p className='winnerHeading'>Winner: Player 1</p>
  
              <p className='historyTrigger' onClick={onClick}>History</p>
            </div>
  
            <div className='gameEndOptions'>
              <p className='replayBtn' onClick={onClick}>Replay</p>
              <p className='mainMenuBtn' onClick={onClick}>Main Menu</p>
            </div>
  
            <Board />
  
            <p className='nextPlayerHdng'>Next Move: Player 1</p>
          </div>
        : 
          <div className='previewView'>
            <div className='previewViewBtnsCntr'>
              <p className='previewVieHeading'>Tic-Tac-Toe.</p>

              <div className='chooseBtnsCntr'>
                <p className='playerOne' onClick={onClick}>X</p>
                <p className='playerTwo' onClick={onClick}>O</p>
              </div>

              <div className='chooseGmdeCntr'>
                <p className='twoPlayerGame' onClick={onClick}>Player Vs. Player</p>
                <p className='singlePlayerGame' onClick={onClick}>CPU Vs. Player</p>
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
            <p className='indPastMove'>Go to move #3</p>
          </div>
        </div> 
  
      </div>
    );
  }
}

export default App;
