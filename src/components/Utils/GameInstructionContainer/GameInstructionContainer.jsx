const GameActivityContainer = ({ instrution }) => {
  return (
  <div className='game-instruction'>
      <header className="flex-column">
        <h3>{instrution.heading}</h3>
        <p>{instrution?.subHeading}</p>
      </header>
      <div className="body"></div>
    </div>
  )
}

export default GameActivityContainer