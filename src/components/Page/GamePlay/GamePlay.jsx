import { useEffect, useState } from 'react'
import MainBoard from '../../Layout/MainBoard/MainBoard'
import PlayerStatsBoard from '../../Layout/PlayerStatsBoard/PlayerStatsBoard'
import { GameBlockList } from '../../Utils/GameBoardBlock/GameBoardBlockList'

const GamePlay = () => {
  const [boardBlocks, setBoardBlocks] = useState(GameBlockList)
  const [playerTurn, setPlayerTurn] = useState({
    player1: true,
    player2: false
  })
  const [playerAmount, setPlayerAmount] = useState({
    player1: {remeaning: 5000, wage: 0},
    player2: {remeaning: 5000, wage: 0},
  })
  const [diceValue, setDiceValue] = useState({
    player1:0,
    player2:0
  }) 
  const [playerPositions, setPlayerPositions] = useState({
    player1: 1,
    player2: 1,
  })
  const [gameProgressHandler, setGameProgressHandler] = useState({
    player1:{
      buyed:[]
    },
    player2:{
      buyed:[]
    }
  })
 
  const increasePlayerPosition = (playerTurn, diceVal) => {
    if(playerTurn.player1){
      for (let i = 0; i <= diceVal; i++) {
        setTimeout(() => {
          if(i === diceVal){
            setPlayerTurn({player1: !playerTurn.player1, player2: !playerTurn.player2,  })
          }
          setPlayerPositions({player1: playerPositions.player1+ i , player2: playerPositions.player2})   
        }, (i + 1) * 700);
      }
    }
    else if(playerTurn.player2){
      for (let i = 0; i <= diceVal; i++) {
        setTimeout(() => {
          if(i === diceVal){
            setPlayerTurn({player2: !playerTurn.player2, player1: !playerTurn.player1,  })
          }
          setPlayerPositions({player2: playerPositions.player2+ i , player1: playerPositions.player1})   
        }, (i + 1) * 700);
      }
  }
}
  
  useEffect(() => {
    if(diceValue.player1 !== 0 || diceValue.player2 !== 0){
      const isIncludesPlayer1 = gameProgressHandler.player1.buyed.includes(boardBlocks[(playerPositions.player1 -1 )+ diceValue.player1]?.cityName)
      const isIncludesPlayer2 = gameProgressHandler.player2.buyed.includes(boardBlocks[(playerPositions.player2 -1 )+ diceValue.player2]?.cityName)

      const cityName1 = boardBlocks[(playerPositions.player1 - 1)+ diceValue.player1]?.cityName
      const cityName2 = boardBlocks[(playerPositions.player2 - 1)+ diceValue.player2]?.cityName

      if(playerTurn.player1){
        const ticketPrice = boardBlocks[(playerPositions.player1 - 1)+ diceValue.player1]?.ticketPrice
        
        if(!isIncludesPlayer1 && !isIncludesPlayer2){
          if(playerAmount.player1.remeaning > 0 && playerAmount.player1.remeaning >=  ticketPrice){
            setPlayerAmount({...playerAmount, player1:{remeaning: playerAmount.player1.remeaning - ticketPrice, wage: playerAmount.player1.wage + ticketPrice}})
            setGameProgressHandler({...gameProgressHandler, player1:{...gameProgressHandler.player1, buyed:[...gameProgressHandler.player1.buyed, cityName1 ]}})
            
            increasePlayerPosition(playerTurn, diceValue.player1)
          } else {
            alert("You balance is LOW A")
          }
        } else {
          alert("You Already have the Ticket or your competitor has the Ticket")
        }
      }else if(playerTurn.player2){
        const ticketPrice = boardBlocks[(playerPositions.player2 - 1)+ diceValue.player2]?.ticketPrice
       
        
        if(!isIncludesPlayer2 && !isIncludesPlayer1){
          if(playerAmount.player2.remeaning > 0 && playerAmount.player2.remeaning >=  ticketPrice){
            setPlayerAmount({...playerAmount, player2:{remeaning: playerAmount.player2.remeaning - ticketPrice, wage: playerAmount.player2.wage + ticketPrice}})
            setGameProgressHandler({...gameProgressHandler, player2:{...gameProgressHandler.player2, buyed:[...gameProgressHandler.player2.buyed, cityName2 ]}})

            increasePlayerPosition(playerTurn, diceValue.player2)

          } else {
            alert("You balance is LOW B")
          }
        } else {
          alert("You Already have the Ticket or your competitor has the Ticket B")
        }
      } 
    }
  },[diceValue])

  return (
    <div className='game-play'>
      <PlayerStatsBoard amount={playerAmount.player1} gameProgress={gameProgressHandler.player1} allPlayerTurn={playerTurn} diceValue={diceValue} currentDiece={diceValue.player1} setDiceValue={setDiceValue} playerTurn={playerTurn.player1} setPlayerTurn={setPlayerTurn}/>
      <MainBoard setPlayerPositions={setPlayerPositions} playerPositions={playerPositions} boardBlocks={boardBlocks} setBoardBlocks={setBoardBlocks}/>
      <PlayerStatsBoard amount={playerAmount.player2} gameProgress={gameProgressHandler.player2} allPlayerTurn={playerTurn} diceValue={diceValue} currentDiece={diceValue.player2} setDiceValue={setDiceValue} playerTurn={playerTurn.player2} setPlayerTurn={setPlayerTurn}/>
    </div>
  )
}

export default GamePlay