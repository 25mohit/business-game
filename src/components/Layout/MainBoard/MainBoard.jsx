import GameBoardBlock from '../../Utils/GameBoardBlock/GameBoardBlock'
import { GameBlockList } from '../../Utils/GameBoardBlock/GameBoardBlockList'

const MainBoard = () => {

  console.log("GameBlockList", GameBlockList);

  return (
    <div className='main-game-board'>
      <div className="block-row flex top">
        {
          GameBlockList?.slice(0,6).map((ticket, ind) => <GameBoardBlock key={ind} ticket={ticket}/>)
        }
      </div>
      <div className="block-row flex-column right">
        {
          GameBlockList?.slice(6,12).map((ticket, ind) => <GameBoardBlock key={ind} ticket={ticket}/>)
        }
      </div>
      <div className="block-row flex bottom">
        {
          GameBlockList?.slice(12,18).map((ticket, ind) => <GameBoardBlock key={ind} ticket={ticket}/>)
        }
      </div>
      <div className="block-row flex-column left">
        {
          GameBlockList?.slice(18,24).map((ticket, ind) => <GameBoardBlock key={ind} ticket={ticket}/>)
        }
      </div>
    </div>
  )
}

export default MainBoard