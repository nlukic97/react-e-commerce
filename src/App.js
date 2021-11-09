import './App.css';
import React, {useState, useEffect} from "react"
import Product from './components/Product'


function App() {

  // STATE: products
  const [products, setProducts] = useState([
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
      price:12,
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


  // When cart state changes
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])


  return (
    <div className="App">
      <h1>Nikola's shop</h1>

      { products.map(product=> {
        return (
          <Product 
            key={product.id} 
            item={product} 
            addToCart={addToCart}
          />
        )
      }) }

    </div>
  );
}

export default App;
