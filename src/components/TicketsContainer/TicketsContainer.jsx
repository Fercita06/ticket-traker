import React from 'react';

import Ticket from '../Ticket/Ticket';
import './TicketsContainer.scss'

const TicketsContainer = () => {

  const arrayTeam = [
    {
      id:1,
      name:"Braiden Bruce",
      role:"Manager",
      tickets:0
    },
    {
      id:2,
      name:"Harrison Porter",
      role:"Supervisor",
      tickets:0
    },
    {
      id:3,
      name:"David Schmidt",
      role:"Manager",
      tickets:0
    },
    {
      id:4,
      name:"Kyra Cherry",
      role:"Developer",
      tickets:0
    },
    {
      id:5,
      name:"Kyle Mcmillan",
      role:"Manager",
      tickets:0
    },
    {
      id:6,
      name:"Molly Galvan",
      role:"Senior developer",
      tickets:0
    },
    {
      id:7,
      name:"Aden Hogan",
      role:"Senior manager",
      tickets:0
    },
    {
      id:8,
      name:"Samuel Williams",
      role:"Junior developer",
      tickets:0
    },
    {
      id:9,
      name:"Roselyn Berger",
      role:"Brand manager",
      tickets:0
    },
    {
      id:10,
      name:"Thomas Brown",
      role:"Project manager",
      tickets:0
    },
  ];

  const tickets =  arrayTeam.map( ticket => <Ticket key={ticket.id} ticket={ticket}/>)



  return (
    <section className="tickets-tracker">
      <h2>Ticket Tracker</h2>
      <div className="tickets-container">{tickets}</div>
      
    </section>
  )
}

export default TicketsContainer