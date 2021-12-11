import React from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Board from './components/Board';

function App() {
  return (
    <div className="container">

      <div className='mainGameView'>
        <div className='navBar'>
          <p className='winnerHeading'>Winner: Player 1</p>

          <p className='historyTrigger'>History</p>
        </div>

        <Board />

        <p className='nextPlayerHdng'>Next Player: Player 1</p>
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
