import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
    let oldPrice = ["12,495", "11,900", "1,599", "2499"];
    let newPrice = ["10,495", "10,900", "1,299", "1499"];
    let description = [
        ["Logitech Mx master is a ", "8000 DPI"], ["Apple pencil is a ", "Magnetic attachment"], ["Sony WH-1000XM4 is a ", "Noise cancellation"], ["Fitbit Charge 5 is a ", "Heart rate monitor"]
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>

            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;