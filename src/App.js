import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Icons
import { FaShoppingCart as CartIcon } from 'react-icons/fa';

// Components
import Products from './components/Products';
import Cart from './components/Cart';
import ItemNotification from './components/ItemNotification';

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
    },
    {
      id:2,
      title:'Nice cat',
      price:124,
      imgSrc:'https://static.wikia.nocookie.net/fa416344-abcc-48e4-a27b-a3083b61d0f0',
      imgAlt:'cat'
    },
    {
      id:3,
      title:'Nice cat',
      price:12,
      imgSrc:'https://static.wikia.nocookie.net/fa416344-abcc-48e4-a27b-a3083b61d0f0',
      imgAlt:'cat'
    },
    {
      id:4,
      title:'Nice cat',
      price:124,
      imgSrc:'https://static.wikia.nocookie.net/fa416344-abcc-48e4-a27b-a3083b61d0f0',
      imgAlt:'cat'
    },
    {
      id:5,
      title:'Nice cat',
      price:12,
      imgSrc:'https://static.wikia.nocookie.net/fa416344-abcc-48e4-a27b-a3083b61d0f0',
      imgAlt:'cat'
    },
    {
      id:6,
      title:'Nice cat',
      price:124,
      imgSrc:'https://static.wikia.nocookie.net/fa416344-abcc-48e4-a27b-a3083b61d0f0',
      imgAlt:'cat'
    },
  ])

  // STATE: cart
  let savedCart = localStorage.getItem('cart')
  const [cart, setCart] = useState(()=> (savedCart !== null) ? JSON.parse(savedCart) : [])
  
  // State: amount of items in cart
  const [cart_items_amount, set_cart_items_amount] = useState(()=> get_cart_items_amount(cart))
  

  // goes through cart, and returns how many items a user has added
  function get_cart_items_amount(cart){
    return cart.reduce((acc, obj)=>{
      acc = acc + obj.quantity 
      return acc
    },0)
  }

  
  function addToCart(id, quantity){
    let itemInCart = cart.find(item => item.id === id)
    let updatedCart;
    
    if(itemInCart !== undefined){
      updatedCart = cart.map(item=> (item.id === id) ? {...item, quantity: item.quantity + quantity} : item)
    } else {
      updatedCart = [...cart, {id, quantity: quantity}]
    }
    
    _update_card_data(updatedCart, get_cart_items_amount(updatedCart))
  }

  
  function removefromCart(id, quantity){
    let updatedCart = cart.map(item=> (item.id === id) ? (item.quantity !== 0) ? {...item, quantity: item.quantity - quantity}:item : item)

    _update_card_data(updatedCart, get_cart_items_amount(updatedCart))
  }


  // called when the cart is updated (which updates the cart, and the )
  function _update_card_data(newCart, newCartItemAmount){
    setCart(newCart)
    set_cart_items_amount(newCartItemAmount)
  }
  

  // When cart state changes
  useEffect(()=> {
    localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])
  



  return (
    <Router>
      <div className="App">

        <nav>
          <Link className='link' to='/'><h1>Nikola's shop</h1></Link>
          <div>
            <Link className='link btn' to="/">Home</Link>
            <Link className={`link btn ${cart_items_amount > 0 ? 'has-items' : ''}`} to="/cart">
              {/* Svh icon */}
              <CartIcon/>


              <ItemNotification num_of_items={cart_items_amount} />
            </Link>
          </div>
          
        </nav>

        <Switch>
          {/**** home page ****/}
          <Route exact path='/'>
            <Products 
              products={products} 
              addToCart={addToCart} 
              />
          </Route>

          {/**** cart page ****/}
          <Route path='/cart'>
            <Cart 
              cart={cart} 
              products={products} 
              addToCart={addToCart}
              removefromCart={removefromCart}
            />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
