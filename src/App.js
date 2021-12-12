import React from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Board from './components/Board';

function App() {
  return (
    <div className="container">

      {/* <div className='mainGameView'>
        <div className='navBar'>
          <p className='winnerHeading'>Winner: Player 1</p>

          <p className='historyTrigger'>History</p>
        </div>

        <div className='gameEndOptions'>
          <p className='replayBtn'>Replay</p>
          <p className='mainMenuBtn'>Main Menu</p>
        </div>

        <Board />

        <p className='nextPlayerHdng'>Next Move: Player 1</p>
      </div> */}

      <div className='previewView'>
        <div className='previewViewBtnsCntr'>
          <p className='previewVieHeading'>Tic-Tac-Toe.</p>

          <div className='chooseBtnsCntr'>
            <p className='playerOne'>X</p>
            <p className='playerTwo'>O</p>
          </div>

          <div className='chooseGmdeCntr'>
            <p className='twoPlayerGame'>Player Vs. Player</p>
            <p className='singlePlayerGame'>CPU Vs. Player</p>
          </div>

          <p className='startGameBtn'>Start Game</p>
        </div>
      </div>

      <div className='historyView'>
        <div className='heading-btnCntr'>
          <div className='closeViewBtn'><BsFillArrowLeftCircleFill className='icon'/></div>

          <p className='historyViewHdng'>History</p>
        </div>

        <div className='indPastMovesCntr'>
          <p className='indPastMove'>Go to move #3</p>
        </div>
      </div>

    </div>
  );
}

export default App;
