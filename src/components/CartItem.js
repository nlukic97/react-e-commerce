// Icons
import { IoMdAddCircle as AddBtn } from 'react-icons/io';
import { AiOutlineMinusCircle as RemoveBtn } from 'react-icons/ai';

const CartItem = ({item, addToCart, removefromCart}) => {
    return (
        <div className='cart-item'>

            {/* flex element 1 */}
            <div className="img-container-and-text">
                <div className="img-container">
                    <img src={item.imgSrc} alt={item.imgAlt} />
                </div>            
                <div>
                    <h3>{item.title}</h3>
                    <em>&#x24;{item.price} per unit</em>
                </div>
            </div>




            {/* flex element 2 */}
            <div className="right-container">

                <div className="buttons-amount-container">
                    <div className="amount-of-items">{item.quantity}</div>
                    
                    <button onClick={()=>{addToCart(item.id, 1)}}>
                        <AddBtn style={{color:'green'}} />
                    </button>
                    <button onClick={()=>{removefromCart(item.id, 1)}}>
                        <RemoveBtn style={{color:'red'}} />
                    </button>                            

                </div>

                <h3 className='item-sub-total'>&#x24;{item.price * item.quantity}</h3>
            </div>
            
            
            
        </div>
        )
    }
    
    export default CartItem
    