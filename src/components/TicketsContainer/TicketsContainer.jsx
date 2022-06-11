import React from 'react';
import {team} from "../../data/team.js"
import Ticket from '../Ticket/Ticket';
import './TicketsContainer.scss'

const TicketsContainer = () => {

  const tickets =  team.map( ticket => <Ticket key={ticket.id} ticket={ticket}/>)



  return (
    <section className="tickets-tracker">
      <h2>Ticket Tracker</h2>
      <div className="tickets-container">{tickets}</div>
      
    </section>
  )
}

export default TicketsContainer