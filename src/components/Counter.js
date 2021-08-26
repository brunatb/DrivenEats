import React, { useState } from 'react';

function Counter({setSelected, order, setOrder, category, selectedOrderIndex}) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(e, operation){
    e.stopPropagation();

    if(operation === "decrease"){
      if(quantity <= 1) { 
        setSelected(false);
        setQuantity(1);
        order[category].choices.splice(selectedOrderIndex, 1);
      } else {
        setQuantity(quantity - 1);
        order[category].choices[selectedOrderIndex].quantity = quantity - 1;
      }
    } else {
      setQuantity(quantity + 1);
      order[category].choices[selectedOrderIndex].quantity = quantity + 1;
    }
    setOrder({...order});
  }

  return (
    <div className="counter">
      <span className="minus" onClick={(e) => handleQuantity(e, "decrease")}>-</span>
      <p>{quantity}</p>
      <span className="plus" onClick={(e) => handleQuantity(e, "increase")}>+</span>
    </div>
  );
}

export default Counter;