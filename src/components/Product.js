const Product = ({item, addToCart}) => {
    return (
        <div>
            <img src={item.imgSrc} alt={item.imgAlt} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.price} &#x24;</p>
            </div>
            <button onClick={()=>{
                addToCart(item.id, 1)
            }}>Add</button>
        </div>
    
    )
}

export default Product
