import './Product.css';
import { useEffect, useState } from 'react';


function ProductList(){

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `You Shopping ${count} items`;
    }, [count]);


    const products = [
        {id: 1, ProductName : "Apple", price: 250, unit: "1kg", stock: 50, image: "https://i.postimg.cc/3x02mc25/apple-photo.jpg"},
        {id: 2, ProductName : "Bannana", price: 120, unit: "1kg", stock: 0, image: "https://i.postimg.cc/mDmP0Y7X/banana-photo.jpg"},
        {id: 3, ProductName : "Milk", price: 500, unit: "500gm", stock: 300, image: "https://i.postimg.cc/7LH42p24/milk-images.jpg"},
        {id: 4, ProductName : "Orrange", price: 230, unit: "1kg", stock: 60, image: "https://i.postimg.cc/3R6QzNbK/orrange-photo.jpg"},
        {id: 5, ProductName : "Potato", price: 20, unit: "1kg", stock: 100, image: "https://i.postimg.cc/jqwD27T7/potato-photo.jpg"},
        {id: 6, ProductName : "Mango", price: 150, unit: "1kg", stock: 500, image: "https://i.postimg.cc/MKCn2KjS/mango-photo.png"}
    ]

    return (
        <div>
            <h1 className="product_title">Product List Here</h1>

            {count === 0 ? (<h5 className='not_shoping'>opps! you don't buy anythings.</h5>) : (<h5 className='shoping'>Congratulations! You buy {count} items</h5>)}

            {products.map(product =>

                <div key={product.id} className='product_box'>

                    <img src={product.image} alt={product.ProductName} />
                    <h4>Product Name: <span>{product.ProductName}</span></h4>
                    <h5>Product Price: <span>{product.price}</span></h5>
                    <p>Unit: <span>{product.unit}</span></p>
                    <p>Stock: <span>{product.stock}</span> {product.stock === 0 && (<mark>Stock out </mark>)}</p>
                    {product.stock > 0 ? (<a href='#' onClick={() => setCount(count+1)}>Buy Now</a>) : (<a href='#'>Buy Next time</a>)}
                </div>

            )}


        </div>
    )
}

export default ProductList;