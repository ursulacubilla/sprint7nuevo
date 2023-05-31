import React, { useState, useEffect } from "react";
import { InputsCheckbox } from './inputs';
import { Panel } from "./styled";
import InputPanel from "./input-panel";



function Application() {
  const [count, setCount] = useState(
    new Array(InputsCheckbox.length).fill(false)
    );
  const [suma, setSuma] = useState(0);
  const [total, setTotal] = useState(0);
  
  
  const handleInputChange = (e) => {
    
    const updatedCheckedState = count.map((item, index) =>
    index === e ? !item : item
    );
    
    setCount(updatedCheckedState);
    
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + InputsCheckbox[index].price;
        }
        
        return sum;
      },
      0
      );

      setTotal(totalPrice);
      
      localStorage.setItem('count', JSON.stringify(updatedCheckedState));
      localStorage.setItem('total', totalPrice);
    };

    useEffect(() => {
        const localCount = JSON.parse(localStorage.getItem('count')) || count;
        const localTotal = Number(localStorage.getItem('total')) || 0;

        setCount(localCount);
        setTotal(localTotal);
    }, []);
    
  return (
    <div className="App">

      <p>¿Qué quieres hacer?</p>
      {InputsCheckbox.map(({ name, price, text, id }, index) => {
        
        return (

          <section key={name}>
            <input
              name={name}
              type="checkbox"
              checked={count[index]}
              onChange={() => handleInputChange(index)}
            />
            <label>{text} {price} €</label>

            {count[0] === true && id === 1 && <Panel isActive={count[0] === true}>
            <InputPanel onComenzar={(textOne, textTwo) => {
             const multText = (textOne * textTwo) * 30;
             setSuma(multText);
           }} />
      
            </Panel>}

          </section>
        );
      })}

      <p>Precio: {total + suma} €</p>

    </div>
  );
}

export default Application;