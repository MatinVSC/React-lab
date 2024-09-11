import "./index.css";



export default function Product ({id, title, image, price, category, basket, data, onSetBasket}) {


  const handelAddToBasket = (id) => {
    const finded = data.find(product => +product.id === +id)
    onSetBasket(prev => [...prev, finded])
  };

    return (
      <>
        <div className="card">
    <div className="product-img">
      <img src={image}/>
    </div>
    <div className="add-to-cart">
      {
        !basket.find(product => +product.id === +id)
        ? ( <button onClick={() => handelAddToBasket(id)} className="add-to-card-btn">
          Add To Cart
        </button>)
        : (<p className="add">Added To Basket</p>)
      }
    </div>
    <div className="card-footer">
      <div className="title">
        <h3>{title}</h3>
        <span>{category}</span>
      </div>
      <div className="price">
        <small>$</small>
        <span>{price}</span>
      </div>
      <div className="product-options">
        <div className="sizes">
          <strong>Sizes</strong>
          <span>40, 41, 42, 43, 44, 45</span>
        </div>
        <div className="colors">
          <strong>Colors</strong>
          <span className="blue"></span>
          <span className="red"></span>
          <span className="white"></span>
          <span className="green"></span>
        </div>
      </div>
    </div>
  </div>
</>
    )
};