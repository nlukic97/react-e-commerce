const Product = ({item, addToCart}) => {
    return (
        <div className='product'>
            <div>
                <img src={item.imgSrc} alt={item.imgAlt} />
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.price} &#x24;</p>

                    <button onClick={()=>{addToCart(item.id, 1)}}>Add</button>
                </div>
            </div>
        </div>
    
    )
}

export default Product
