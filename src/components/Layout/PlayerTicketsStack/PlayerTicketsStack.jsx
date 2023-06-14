import React, { useEffect, useState } from 'react'
import SingleTicketCard from "../../GameAssets/SingleTicketCard/SingleTicketCard"

const PlayerTicketsStack = ({ ticketsList }) => {
    const [ticketList, setTicketList] = useState()

    useEffect(() => {
        setTicketList(ticketsList)
    },[ticketsList])
    
  return (
    <div className='tickets-stack flex-column'>
        {
            ticketList?.slice(0, 6).map((ticket, ind) => <SingleTicketCard key={ind} ticket={ticket}/>)
        }
        
        {/* <div className="ticket">ad</div> */}
    </div>
  )
}

export default PlayerTicketsStack