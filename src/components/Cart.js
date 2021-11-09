const Cart = ({cart}) => {
    return (
        <div>
            {cart.map(cartItem=>{
                return (
                    <h1>{cartItem.id}</h1>
                )
            })}
        </div>
    )
}

export default Cart
