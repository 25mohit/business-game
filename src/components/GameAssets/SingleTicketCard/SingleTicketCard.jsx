import React from 'react'

const SingleTicketCard = ({ ticket }) => {
  return (
    <div className='ticket'>
      <p>{ticket}</p>
      {/* <span>{ticket}</span> */}
    </div>
  )
}

export default SingleTicketCard