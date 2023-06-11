import { useEffect, useState } from 'react';
import GameBoardBlock from '../../Utils/GameBoardBlock/GameBoardBlock'
import { GameBlockList } from '../../Utils/GameBoardBlock/GameBoardBlockList'
import GameBoardCenterContainer from '../../Utils/GameBoardCenterContainer/GameBoardCenterContainer';

const MainBoard = () => {

  const [boardBlocks, setBoardBlocks] = useState(GameBlockList)
  const [playerPositions, setPlayerPositions] = useState({
    player1: 16,
    player2: 1,
  })


  useEffect(() => {
    const newState = GameBlockList?.map((data, ind) => {
      return{
        blockType: data?.blockType,
        cityName: data?.cityName,
        ticketPrice: data?.ticketPrice,
        index: ind+1,
      }
    })
    setBoardBlocks(newState)
  },[GameBlockList])

  console.log("boardBlocks", boardBlocks);
  return (
    <div className='main-game-board'>
      <div className="block-row flex top">
        {
          boardBlocks?.slice(0,6).map((ticket, ind) => <GameBoardBlock playerPositions={playerPositions} key={ind} ticket={ticket} index={ind}/>)
        }
      </div>
      <div className="block-row flex-column right">
        {
          boardBlocks?.slice(6,12).map((ticket, ind) => <GameBoardBlock playerPositions={playerPositions} key={ind} ticket={ticket} index={ind}/>)
        }
      </div>
      <div className="block-row flex bottom">
        {
          boardBlocks?.slice(12,18).reverse().map((ticket, ind) => <GameBoardBlock playerPositions={playerPositions} key={ind} ticket={ticket} index={ind}/>)
        }
      </div>
      <div className="block-row flex-column left">
        {
          boardBlocks?.slice(18,24).reverse().map((ticket, ind) => <GameBoardBlock playerPositions={playerPositions} key={ind} ticket={ticket} index={ind}/>)
        }
      </div>
      <div className="game-center-container flex-center">
          <GameBoardCenterContainer />
      </div>
    </div>
  )
}

export default MainBoard