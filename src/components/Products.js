import Product from './Product'

const Products = ({products, addToCart, removefromCart}) => {
    return (
        <div>
            { products.map(product=> {
            return (
              <Product 
                key={product.id} 
                item={product} 
                addToCart={addToCart}
                removefromCart={removefromCart}
              />
            )
          }) }
        </div>
    )
}

export default Products
