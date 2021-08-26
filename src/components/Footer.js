import React from 'react';

function Footer({order}) {
  const checkout = order.food.choices.length && order.drink.choices.length && order.dessert.choices.length
  return (
    <footer>
      {
        checkout ?
        <button className="checkout">Finalizar pedido</button> :  
        <button>Selecione os 3 itens<br />para fechar o pedido</button>
      }
    </footer>
  );
}

export default Footer;