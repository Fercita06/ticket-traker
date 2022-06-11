import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import './Ticket.scss';


const Ticket = (props) => {
  
  const { name, role, tickets } = props.ticket;
  console.log(props.ticket);

  return (
    <article className="card-container">
      <h3 className="card-container__name">{name}</h3>
      <p className="card-container__role">{role}</p>

      
      <Counter tickets={tickets}/>
      

    </article>
  )
}

export default Ticket