import './App.css';
import React, {useState, useEffect} from "react"
import Product from './components/Product'


function App() {

  // Original list of products
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

// the cart of the user
let savedCart = localStorage.getItem('cart')



  const [cart, setCart] = useState(()=>{
    if(savedCart !== null){
      return JSON.parse(savedCart)
     } else {
      // make a cart with all the elements from the 'products' state
       return [{id:1, quantity:0}]
    } 
  })

  function addToCart(id, amountToAdd){
    let itemInCart = cart.find(item => item.id === id)
    
    if(itemInCart !== undefined){
      setCart(cart.map(item=> (item.id === id) ? {...item, quantity: item.quantity + amountToAdd} : item))
    } else {
      setCart([...cart, {id, quantity: amountToAdd}])
    }
  }

  useEffect(()=>{
    // localStorage.setItem('cart',JSON.stringify(cart))
    console.log(cart);
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
