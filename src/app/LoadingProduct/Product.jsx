import React from "react";
import './style.css'

export default function Product() {
    const [product, setProduct] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [skip, setSkip] = React.useState(0);
    async function fetchProduct() {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,images`);
        const result = await response.json();
        console.log(result.products);
        if (result && result.products) {
            setProduct(result.products);
            setLoading(false);
        }
    }
    function LoadMore() {
        setSkip(prev => prev += 10)
    }
    React.useEffect(() => {
        fetchProduct();
    }, [skip]);

    return (
        <div className="product-container">
            {
                isLoading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="product-list">
                        {
                            product.map(item => (
                                <div className="itemProduct" key={item.id}>
                                    <img height={100} src={item.images[0]} alt={item.title}></img>
                                    <h3>{item.title}</h3>
                                    <p>{item.price}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            <div className="loadbtn" onClick={LoadMore}>Load more..</div>
        </div>
    );
}