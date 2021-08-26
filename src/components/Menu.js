import React from 'react';
import Item from './Item';
import menuData from '../data/menuData';

function Menu({order, setOrder}) {
  return (
    <main>
      {
        menuData.map(menu => {
          return(
            <React.Fragment key={menu.id}>
              <p>{menu.categoryText}</p>
              <ul>
                {
                  menu.options.map(option => 
                  <Item 
                    key={option.id} 
                    category={menu.category} 
                    option={option}
                    order={order}
                    setOrder={setOrder} 
                  />)
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