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
          className="counter__control-minus"
          onClick={() => {
            counter(-1);
          }}
        >
          -
        </button>
        <span className="counter__control-value">{count}</span>
        <button
          className="counter__control-plus"
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