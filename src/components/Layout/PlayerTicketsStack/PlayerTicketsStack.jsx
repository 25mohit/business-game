import React, { useEffect, useState } from 'react'
import SingleTicketCard from "../../GameAssets/SingleTicketCard/SingleTicketCard"

const PlayerTicketsStack = ({ ticketsList }) => {
    const [ticketList, setTicketList] = useState()

    useEffect(() => {
        setTicketList(ticketsList)
    },[ticketsList])
    // const ticketsList = [
    //     {
    //         ticketPrice: 1500,
    //         ticketName:"Jaipur"
    //     },
    //     {
    //         ticketPrice: 1500,
    //         ticketName:"Dausa"
    //     },
    //     {
    //         ticketPrice: 1500,
    //         ticketName:"Jodhpur"
    //     },
    //     {
    //         ticketPrice: 1500,
    //         ticketName:"Jaipur"
    //     },
    //     {
    //         ticketPrice: 1500,
    //         ticketName:"Dausa"
    //     },
    //     {
    //         ticketPrice: 1500,
    //         ticketName:"Jodhpur"
    //     },
    // ]
    // console.log("ticketsList", ticketsList, ticketList);
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