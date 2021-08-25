import React from 'react';
import Counter from './Counter';

function Item({option}) {
  const {title, img, description, price} = option
  return (
    <li>
      <img src={img} alt={title} />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="price">R$ {price.toFixed(2).replace('.', ',')}</p>
      <Counter />
    </li>
  );
}

export default Item;