import React from 'react';
import Item from './Item';
import menuData from '../data/menuData';

function Menu() {
  return (
    <main>
      {
        menuData.map(menu => {
          return(
            <React.Fragment key={menu.id}>
              <p>{menu.categoryText}</p>
              <ul>
                {
                  menu.options.map(option => <Item key={option.id} option={option} />)
                }
              </ul>
            </React.Fragment>
          )
        })
      }
    </main>
  );
}

export default Menu;