// Icons
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineMinusCircle } from 'react-icons/ai';

const CartItem = ({item, addToCart, removefromCart}) => {
    return (
        <div className='cart-item'>
            <div className="img-container">
                <img src={item.imgSrc} alt={item.imgAlt} />
            </div>            
            <h3>{item.title}</h3>
            <h3>&#x24; {item.price}</h3>
            <div>
                <div style={{textAlign:'center'}}>
                    <div><span>{item.quantity}</span></div>
                    <button onClick={()=>{addToCart(item.id, 1)}}> <GrAddCircle /></button>
                    <button onClick={()=>{removefromCart(item.id, 1)}}><AiOutlineMinusCircle /></button>
                </div>
            </div>
            <h3>&#x24; {item.price * item.quantity}</h3>
            
        </div>
        )
    }
    
    export default CartItem
    