import React,{ useState } from "react";
import './Counter.scss';


const Counter = ({tickets}) => {
  console.log(tickets);
  const [ count, setCount ] = useState(tickets);

  const counter = (num) => {
    console.log('se ejecutó counter');
    setCount( count + num );
  }

  return (
    <div className="counter">
      <h5 className="counter__title">Counter</h5>
      <div className="counter__controls">
        <button
          disabled={ count===0 ? true : false }
          className="control__minus"
          onClick={() => {
            counter(-1);
          }}
        >
          -
        </button>
        <span className="control__value">{count}</span>
        <button
          className="control__plus"
          onClick={() => {
            counter(+1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;