import './Product.css';

function ProductList(){

    const products = [
        {id: 1, ProductName : "Apple", price: 250, unit: "1kg", stock: 50},
        {id: 2, ProductName : "Bannana", price: 120, unit: "1kg", stock: 0},
        {id: 3, ProductName : "Milk", price: 500, unit: "500gm", stock: 300},
        {id: 4, ProductName : "Orrange", price: 230, unit: "1kg", stock: 60},
        {id: 5, ProductName : "Potato", price: 20, unit: "1kg", stock: 100},
        {id: 6, ProductName : "Mango", price: 150, unit: "1kg", stock: 500}
    ]

    return (
        <div>
            <h1 className="product_title">Product List Here</h1>

            {products.map(product =>

                <div key={product.id} className='product_box'>

                    <h4>Product Name: {product.ProductName}</h4>
                    <h5>Product Price: {product.price}</h5>
                    <h6>Unit: {product.unit}</h6>
                    <p>Stock: {product.stock}</p>
                    {product.stock>0 ? (<a href='#'>Buy Now</a>) : (<a href='#'>Buy Next time</a>)}
                    {product.stock === 0 && (<mark>Stock out </mark>)}
                </div>

            )}


        </div>
    )
}

export default ProductList;