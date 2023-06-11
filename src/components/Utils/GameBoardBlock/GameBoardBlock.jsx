import PlayerPiece from "../../GameAssets/PlayerPiece/PlayerPiece"

const GameBoardBlock = ({ ticket, playerPositions, index }) => {
  console.log("playerPositions",ticket, playerPositions);

  const getPlayerPosition = (tickInd, playerInd) => {
    console.log("new",tickInd, playerInd.player1, playerInd.player2, playerInd.player3);
    if(
      (tickInd === playerInd.player1 && tickInd === playerInd.player2 && tickInd === playerInd.player3) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player3 && tickInd === playerInd.player4) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player4 && tickInd === playerInd.player5) ||

      (tickInd === playerInd.player2 && tickInd === playerInd.player3 && tickInd === playerInd.player4) ||
      (tickInd === playerInd.player2 && tickInd === playerInd.player3 && tickInd === playerInd.player5) ||

      (tickInd === playerInd.player3 && tickInd === playerInd.player4 && tickInd === playerInd.player5)
      ){
      return "triple"
    }
    if(
      (tickInd === playerInd.player1 && tickInd === playerInd.player2) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player3) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player4) ||
      (tickInd === playerInd.player1 && tickInd === playerInd.player5) ||
      (tickInd === playerInd.player2 && tickInd === playerInd.player3) || 
      (tickInd === playerInd.player2 && tickInd === playerInd.player4) || 
      (tickInd === playerInd.player2 && tickInd === playerInd.player5) || 
      (tickInd === playerInd.player3 && tickInd === playerInd.player4) || 
      (tickInd === playerInd.player4 && tickInd === playerInd.player5)
       ){
      return "double"
    }
    
    else {
      return "single"
    }
  }
  return (
    <div className={`game-board-block ${ticket?.blockType}`}>
      <p className='city-name'>{ticket?.cityName}</p>
      <div className="bar"></div>
      {ticket?.index}
      <p className="ticket-price">{ticket?.ticketPrice}</p>
      {console.log(getPlayerPosition(ticket.index, playerPositions))}
      <div className={`players-piece ${getPlayerPosition(ticket.index, playerPositions)}`}>
        {ticket.index === playerPositions?.player1 &&<PlayerPiece /> }
        {ticket.index === playerPositions?.player2 &&<PlayerPiece /> }
        {ticket.index === playerPositions?.player3 &&<PlayerPiece /> }
        {ticket.index === playerPositions?.player4 &&<PlayerPiece /> }
        {ticket.index === playerPositions?.player5 &&<PlayerPiece /> }
      </div>
    </div>
  )
}

export default GameBoardBlock