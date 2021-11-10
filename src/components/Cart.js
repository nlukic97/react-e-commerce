// Icons
import { FaShoppingCart as CartIcon } from 'react-icons/fa';

const Cart = ({cart, products, addToCart, removefromCart}) => {

    let newCart = cart.filter(item=> (item.quantity !== 0) ? products.find(product => product.id === item.id): false) //get all the items in the cart that are still present in the 'products' state
    let newProducts = newCart.map(cartItem=> {
        let curretProd = products.find(product => (cartItem.id === product.id))
        return {...curretProd, quantity: cartItem.quantity, totalPrice: cartItem.quantity * curretProd.price}
    })

    //getting the total price for this purchase
    let subTotal = newProducts.reduce((prev, curr)=>{
        return prev + curr.totalPrice
    },0)

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Sub total: &#x24;{subTotal}</h1>
            <div className="products">
                {newProducts.map(item=>{
                    return (
                        // <h1 key={cartItem.id}>
                        //     <span>id: {cartItem.id}</span> |
                        //     <span>&#x24;{cartItem.price}</span> |
                        //     <span> x {cartItem.quantity} </span> |
                        //     <span>Total price: &#x24;{cartItem.totalPrice}</span>
                        //     <button onClick={()=>{addToCart(cartItem.id, 1)}}>Add item</button>
                        //     <button onClick={()=>{removefromCart(cartItem.id, 1)}}>Remove item</button>
                        // </h1>
                        
                        <div className='product'>
                            <div>
                                <div className="img-container">
                                    <img src={item.imgSrc} alt={item.imgAlt} />
                                </div>
                                <div className="product-content">
                                    <div className="left">
                                        <h3>{item.title}</h3>
                                        <h3>x {item.quantity}</h3>
                                    </div>
                                    <div className="right">
                                        <h3>&#x24; {item.price}</h3>
                                        <button onClick={()=>{addToCart(item.id, 1)}}><span>+</span><CartIcon /></button>
                                        <button onClick={()=>{removefromCart(item.id, 1)}}>Remove item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart
