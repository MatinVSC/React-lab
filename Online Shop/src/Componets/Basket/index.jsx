import { FaRegTrashAlt } from "react-icons/fa";
import "./index.css";

export default function Basket ({id ,title, image, price, category, basket, onSetBasket, onTotalPrice}) {

    const removeToBasket = (id) => {
        const removed = basket.filter(product => product.id !== id);
        onSetBasket(removed);
    };

    const calcTotalPrice = (basket) => {
        return basket.reduce( (prev, next) => { 
            console.log(prev, next);
            
          return Math.floor(prev + next.price) 
        }, 0)
      };
    
      const resultTotal = calcTotalPrice(basket);
      onTotalPrice(resultTotal);

    return (
        <>
           <div className="baskets">
           <div className="Basket">
                <img className="basketImg" src={image} />
                <div className="Basket-title">
                <h4>{title}</h4>
                <span>{category}</span>
                </div>
                <div className="info">
                <p className="price">$ {price}</p>
                <FaRegTrashAlt onClick={() => removeToBasket(id)} className="trash"/>
                </div>
            </div>
            </div>
        </>
    )
};