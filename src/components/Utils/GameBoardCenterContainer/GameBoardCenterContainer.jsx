import React from 'react'
import GameActivityContainer from '../GameActivityContainer/GameActivityContainer'

const GameBoardCenterContainer = () => {
  return (
    <div className='game-inner-container'>
        <GameActivityContainer />
        <GameActivityContainer />
        <GameActivityContainer />
        <GameActivityContainer />
    </div>
  )
}

export default GameBoardCenterContainer