import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import './index.css'

const ProductCard = (props) => {
    
    let {title, rate, price, discount, isFreeShipping, isSpecialSale, img} = props;

    return (
        <>
        <div className="product-card">
		<div className={isSpecialSale && "badge"}>{isSpecialSale && 'Special Sale'}</div>
		<div className="product-tumb">
			<img src={img} />
		</div>
		<div className="product-details">
			<span className={` "product-catagory" ${isFreeShipping && 'isFreeShipping' }`}>
                {isFreeShipping && 'Free Shipping'}
                {isFreeShipping && <IoIosSend />}
            </span>
			<h4><a href="">{title}</a></h4>
			<p>
                <span className="discount">{discount < 10 && `Only ${discount} left in stock`}</span>
                <span><FaStar style={{color: 'yellow'}} /> {rate}</span>
            </p>
			<div className="product-bottom-details">
				<div className="product-price">
                $ {isSpecialSale ? (price / 2) : price} 
                  {isSpecialSale && <p className="price">$ {price}</p>}
                </div>
				<div className="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
    </>

    )
}

export default ProductCard