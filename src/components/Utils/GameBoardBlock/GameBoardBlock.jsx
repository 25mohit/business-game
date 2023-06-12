import PlayerPiece from "../../GameAssets/PlayerPiece/PlayerPiece"
import { GetPlayerPosition } from "../Functions/PlayerLocation";

const GameBoardBlock = ({ ticket, playerPositions, index }) => {

  return (
    <div className={`game-board-block ${ticket?.blockType}`}>
      <p className='city-name'>{ticket?.cityName}</p>
      <div className="bar"></div>
      {/* {ticket?.index} */}
      <p className="ticket-price">{ticket?.ticketPrice}</p>
      <div className={`players-piece ${GetPlayerPosition(ticket.index, playerPositions)}`}>
        { ticket.index === playerPositions?.player1 &&<PlayerPiece /> }
        { ticket.index === playerPositions?.player2 &&<PlayerPiece /> }
        { ticket.index === playerPositions?.player3 &&<PlayerPiece /> }
        { ticket.index === playerPositions?.player4 &&<PlayerPiece /> }
        { ticket.index === playerPositions?.player5 &&<PlayerPiece /> }
      </div>
    </div>
  )
}

export default GameBoardBlock