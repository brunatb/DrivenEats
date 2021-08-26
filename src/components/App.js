import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

function App() {
  const [order, setOrder] = useState({
    food: {
      choices: []
    },
    drink: {
      choices: []
    },
    dessert: {
      choices: []
    }
  });

  return (
    <>
      <Header />
      <Menu order={order} setOrder={setOrder} />
      <Footer />
    </>
  );
}

export default App;