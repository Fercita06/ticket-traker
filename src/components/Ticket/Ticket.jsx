import React, { useState } from 'react';
import './Ticket.scss';


const Ticket = (props) => {

  const { name, role } = props.ticket;
  
  const [ count, setCount ] = useState(0);

  const counter = (num) => {
    setCount( count + num );
  }

  return (
    <article className="card-container">
      <h3 className="card-container__name">{name}</h3>
      <p className="card-container__role">{role}</p>

      <div className="counter">
        <h5 className="counter__title">Counter</h5>
        <div className="counter__controls">
          <button className="counter__control-minus"
            onClick={()=>{counter(-1)}}
          >-</button>
          <span className="counter__control-value">{count}</span>
          <button className="counter__control-plus"
            onClick={()=>{counter(+1)}}
          >+</button>
        </div>
      </div>
        

    </article>
  )
}

export default Ticket