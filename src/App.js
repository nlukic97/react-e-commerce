import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Products from './components/Products';
import Cart from './components/Cart';


function App() {

  // STATE: products
  const [products] = useState([
    {
      id:0,
      title:'Nice cat',
      price:12,
      imgSrc:'https://static.wikia.nocookie.net/fa416344-abcc-48e4-a27b-a3083b61d0f0',
      imgAlt:'cat'
    },
    {
      id:1,
      title:'Nice cat',
      price:124,
      imgSrc:'https://static.wikia.nocookie.net/fa416344-abcc-48e4-a27b-a3083b61d0f0',
      imgAlt:'cat'
    }
  ])

  // STATE: cart
  let savedCart = localStorage.getItem('cart')
  const [cart, setCart] = useState(()=> (savedCart !== null) ? JSON.parse(savedCart) : [])


  function addToCart(id, quantity){
    let itemInCart = cart.find(item => item.id === id)
    let updatedCart;

    if(itemInCart !== undefined){
      updatedCart = cart.map(item=> (item.id === id) ? {...item, quantity: item.quantity + quantity} : item)
    } else {
      updatedCart = [...cart, {id, quantity: quantity}]
    }

    setCart(updatedCart)
  }

  function removefromCart(id, quantity){
    setCart(cart.map(item=> (item.id === id) ? (item.quantity !== 0) ? {...item, quantity: item.quantity - quantity}:item : item))
  }


  // When cart state changes
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])


  return (
    <Router>
      <div className="App">
        <h1>Nikola's shop</h1>

        <Link to="/">Show</Link>
        <Link to="/cart">Cart</Link>

        <Switch>
          {/**** home page ****/}
          <Route exact path='/'>
            <Products 
              products={products} 
              addToCart={addToCart} 
              removefromCart={removefromCart}
              />
          </Route>

          {/**** cart page ****/}
          <Route path='/cart'>
            <Cart cart={cart} products={products} />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
