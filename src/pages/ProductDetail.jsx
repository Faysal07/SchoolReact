import { useParams } from "react-router-dom";

function ProductDetail(){

    const {id} = useParams();

    return(
        <div>
            <h1>Single Product Load  </h1>
            <h2>Single Product ID: {id}</h2>
        </div>
    )
}

export default ProductDetail;