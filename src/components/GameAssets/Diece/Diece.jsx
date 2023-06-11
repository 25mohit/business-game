const Diece = ({ diceValue, setDiceValue, playerTurn, setPlayerTurn, currentDiece, currentPlayer }) => {
// console.log(diceValue);
  const onDiceClickHandler = () => {
    if(currentPlayer){
      // console.log(playerTurn);
      if(playerTurn.player1){
        setDiceValue({...diceValue, player1:Math.ceil(Math.random()*6)})
        // setPlayerTurn({player1: !playerTurn.player1, player2: !playerTurn.player2,  })
      }
      else if(playerTurn.player2){
        setDiceValue({...diceValue, player2:Math.ceil(Math.random()*6)})
        // setPlayerTurn({player1: !playerTurn.player1, player2: !playerTurn.player2,  })
        
      }
    } else {
      alert("NOT YOUR TURN")
    }
    // console.log();
  }
  return (
    <div className='diece flex-center' onClick={onDiceClickHandler}>
      <span className="text">{currentDiece}</span>
    </div>
  )
}

export default Diece