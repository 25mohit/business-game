import React from 'react'
import GameActivityContainer from '../GameInstructionContainer/GameInstructionContainer'
import { InstructionsList } from '../GameInstructionContainer/GameInstructionsList'

const GameBoardCenterContainer = () => {
  return (
    <div className='game-inner-container'>
      {
        InstructionsList?.map((instrution, index) => <GameActivityContainer instrution={instrution} key={index}/>)
      }
    </div>
  )
}

export default GameBoardCenterContainer