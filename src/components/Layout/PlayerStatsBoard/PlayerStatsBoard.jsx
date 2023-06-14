import React from 'react'
import PlayerTicketsStack from '../PlayerTicketsStack/PlayerTicketsStack'
import Diece from '../../GameAssets/Diece/Diece'

const PlayerStatsBoard = ({ setClicked, clicked, playerTurn, diceValue, setDiceValue, allPlayerTurn, setPlayerTurn, currentDiece, amount, gameProgress }) => {

  return (
    <div className={`player-stats-container flex-column ${playerTurn ? 'active-player': ''}`}>
      <div className="statistics flex-column">
        <header className='flex-column'>
          <h3>Mohit Agarwal</h3>
          <span className='remeaning'>₹ {amount?.remeaning} <i>remeaning</i></span>
          <span className='expense'>₹ {amount?.wage} <i>spend</i></span>
          <span className="total-ticket flex">6 Tickets <span className='view-all'>view all</span></span>
        </header>
      </div>
      <div className="dice-container flex-center">
        <Diece clicked={clicked} setClicked={setClicked} currentPlayer={playerTurn} currentDiece={currentDiece} setPlayerTurn={setPlayerTurn} diceValue={diceValue} setDiceValue={setDiceValue} playerTurn={allPlayerTurn}/>
      </div>
      <PlayerTicketsStack ticketsList={gameProgress.buyed}/>
    </div>
  )
}

export default PlayerStatsBoard