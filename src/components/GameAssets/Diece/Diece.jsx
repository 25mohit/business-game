import { useEffect, useState } from "react";

const Diece = ({ diceValue, clicked, setClicked, setDiceValue, playerTurn, setPlayerTurn, currentDiece, currentPlayer }) => {
// console.log(diceValue);

  useEffect(() => {
    setClicked(false)
  },[playerTurn])

  const onDiceClickHandler = () => {
    setClicked(true)
    if(currentPlayer && !clicked){
      // console.log(playerTurn);
      if(playerTurn.player1){
        setDiceValue({...diceValue, player1:Math.ceil(Math.random()*6)})
        // setPlayerTurn({player1: !playerTurn.player1, player2: !playerTurn.player2,  })
      }
      else if(playerTurn.player2){
        setDiceValue({...diceValue, player2:Math.ceil(Math.random()*6)})
        // setPlayerTurn({player1: !playerTurn.player1, player2: !playerTurn.player2,  })
        
      }
    } else if(!currentPlayer && clicked){
      alert("NOT YOUR TURN")
    }
    // console.log();
  }
  console.log("currentPlayer", currentPlayer)
  return (
    <div className={`diece flex-center ${clicked && currentPlayer ? 'in-progress' : ''}`} onClick={onDiceClickHandler}>
      <span className="text">{currentDiece}</span>
    </div>
  )
}

export default Diece