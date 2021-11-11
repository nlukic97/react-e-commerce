// Icons
// import { FaShoppingCart as CartIcon } from 'react-icons/fa';
import {BsCart3 as CartIcon} from "react-icons/bs";

const Product = ({item, addToCart}) => {
    return (
        <div className='product'>
            <div>
                <div className="img-container">
                    <img src={item.imgSrc} alt={item.imgAlt} />
                </div>
                <div className="product-content">
                    <div className="left">
                        <h3>{item.title}</h3>
                    </div>
                    <div className="right">
                        <h3>&#x24;{item.price}</h3>
                        <button onClick={()=>{addToCart(item.id, 1)}}><CartIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Product
