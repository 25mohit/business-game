const GameBoardBlock = ({ ticket }) => {
  return (
    <div className={`game-board-block ${ticket?.typeTicket ? 'city-ticket' : 'activity'}`}>
      <p className='city-name'>{ticket?.cityName}</p>
      <div className="bar"></div>
      <p className="ticket-price">{ticket?.ticketPrice}</p>
    </div>
  )
}

export default GameBoardBlock