import React from 'react';

function Footer({order}) {
  const checkout = order.food.choices.length && order.drink.choices.length && order.dessert.choices.length;

  function sendOrder(){
    const totalPrice = getTotalPrice();
    const message= `Olá, gostaria de fazer o pedido:
    - Prato:${order.food.choices.map(c => ` ${c.title}`)}
    - Bebida:${order.drink.choices.map(c => ` ${c.title}`)}
    - Sobremesa:${order.dessert.choices.map(c => ` ${c.title}`)}
    Total: R$ ${totalPrice.toFixed(2).replace('.', ',')} 
    `;

    window.open(`https://wa.me/0000000000000?text=${encodeURI(message)}`)
  }

  function getTotalPrice() {
    let foodPrice = 0;
    let drinkPrice = 0;
    let dessertPrice = 0;

    order.food.choices.forEach(c => foodPrice += c.price * c.quantity);
    order.drink.choices.forEach(c => drinkPrice += c.price * c.quantity);
    order.dessert.choices.forEach(c => dessertPrice += c.price * c.quantity);

    return foodPrice + drinkPrice + dessertPrice;
  }

  return (
    <footer>
      {
        checkout ?
        <button className="checkout" onClick={sendOrder}>Finalizar pedido</button> :  
        <button>Selecione os 3 itens<br />para fechar o pedido</button>
      }
    </footer>
  );
}

export default Footer;