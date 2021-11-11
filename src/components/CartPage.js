import CartItem from './CartItem'

const CartPage = ({cart, products, addToCart, removefromCart}) => {

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
            <div className="cart-products">
                {newProducts.map(item=>{
                    return (                        
                        <CartItem item={item} addToCart={addToCart} removefromCart={removefromCart}  key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default CartPage
