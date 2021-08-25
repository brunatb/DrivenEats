import React from 'react';
import Item from './Item';

function Menu() {
  return (
    <main>
      <p>Primeiro, seu prato</p>
      <ul>
       <Item />
       <Item />
       <Item />
      </ul>
    </main>
  );
}

export default Menu;