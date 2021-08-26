import React, { useState } from 'react';
import Counter from './Counter';

function Item({category, option, order, setOrder}) {
  const [selected, setSelected] = useState(false);
  const {title, img, description, price} = option;

  function handleClick() {
    const index = order[category].choices.findIndex(c => c.title === title);
    if(index === -1) {
      order[category].choices.push({title, price, quantity: 1});
      setOrder({...order});
    } else {
      order[category].choices.splice(index, 1);
      setOrder({...order});
    }
    setSelected(!selected)
  }
  
  return (
    <li className={selected ? "selected" : ""} onClick={handleClick}>
      <img src={img} alt={title} />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="price">R$ {price.toFixed(2).replace('.', ',')}</p>
      {selected ? 
        <Counter 
          setSelected={setSelected}
          order={order}
          setOrder={setOrder}
          category={category}
          selectedOrderIndex={order[category].choices.findIndex(c => c.title === title)}
        /> 
        : 
          null
      }
    </li>
  );
}

export default Item;