import GameBoardBlock from '../../Utils/GameBoardBlock/GameBoardBlock'

const MainBoard = () => {
  return (
    <div className='main-game-board'>
      <div className="block-row flex top">
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
      </div>
      <div className="block-row flex-column right">
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
      </div>
      <div className="block-row flex bottom">
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
      </div>
      <div className="block-row flex-column left">
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
          <GameBoardBlock />
      </div>
    </div>
  )
}

export default MainBoard