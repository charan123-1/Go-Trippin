import "./ProductCard.css";
import formatCurrency from "format-currency";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
    async function addToCart(id, quantity,name,price,image) {
        try {
            const response = await fetch("http://localhost:5000/cart", {
                method: "POST",
                body: JSON.stringify({
                    productId: id,
                    quantity: quantity,
                    name: name,
                    price: price,
                    image: image,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            let data = await response.json();
            alert("Item Added To Cart");
            console.log(data);
        } catch (err) {
            alert("Something Went Wrong");
            console.log(err);
        }
    }
    let opts = { format: "%s%v", symbol: "₹" };
    return (
        <div className='productCard__wrapper'>
            <div>
                <img className='productCard__img' src={product.image} alt='' />
                <h4>{product.name}</h4>
                <div className='ProductCard__price'>
                    <h5>{formatCurrency(`${product.price}`, opts)}</h5>
                </div>
                <div className='ProductCard__Rateing'>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </div>
                <button
                    className='ProductCard__button'
                    onClick={() => addToCart(product.id,1,product.name,product.price,product.image)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
export default ProductCard;
