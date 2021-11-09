const Cart = ({cart, products}) => {

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
            {newProducts.map(cartItem=>{
                return (
                    <h1 key={cartItem.id}>
                        <span>id: {cartItem.id}</span> |
                        <span>{cartItem.price} &#x24;</span> |
                        <span> x {cartItem.quantity} </span> |
                        <span>Total price: {cartItem.totalPrice}</span>
                    </h1>
                )
            })}
            <h1>Sub total: {subTotal} &#x24;</h1>
        </div>
    )
}

export default Cart
