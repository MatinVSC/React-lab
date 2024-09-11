import { SlBasket } from "react-icons/sl";
import { IoShirt } from "react-icons/io5";
import "./index.css";
import { useEffect, useState } from "react";

export default function Header({ basket, onSetMoving, data, onSetData }) {
  const [category, setCategory] = useState([]);
  const handelMoving = () => {
    onSetMoving(true);
  };

  const handelHome = () => {
    onSetMoving(false);
  };

  useEffect(() => {
    getCategorys();
  }, []);

  async function getCategorys() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/categories`);
      const data = await res.json();
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handelFiltered(category) {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      onSetData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handelSearch = (event) => {
    const {value} = event.target;
    const search = data.filter(product => product.title.search(value) - 1);
    onSetData(search);
  };

  return (
    <>
      <div className="container-header">
        <div className="icon-head">
          <IoShirt className="shirtIcon" />
        </div>
        <div className="list-heah">
          <ul>
            <li>
              <a onClick={handelHome}>home</a>
            </li>
            <li>
              <a>products</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="Login-head showBasket">
          <span className="basketLength">
            {basket.length === 0 ? "" : basket.length}
          </span>
          <ul className="login">
            <SlBasket onClick={handelMoving} className="basketIcon" />
          </ul>
        </div>
      </div>
      <div className="button-container">
        {category.map((cat) => (
          <div
            key={cat}
            onClick={() => handelFiltered(cat)}
            className="button -salmon center"
          >
            {cat}
          </div>
        ))}
        <div className="input">
          <div id="cover">
            <form method="get" action="">
              <div className="tb">
                <div className="td">
                  <input
                    onChange={handelSearch}
                    type="text"
                    placeholder="Search"
                    required
                  />
                </div>
                <div className="td" id="s-cover">
                  <button type="submit">
                    <div id="s-circle"></div>
                    <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
