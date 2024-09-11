import { useEffect, useState } from "react";
import Skeleton from "./Componets/Skeleton";
import Header from "./Componets/Header";
import Product from "./Componets/Product";
import Basket from "./Componets/Basket";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [basket, setBasket] = useState([]);
  const [moving, setMoving] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function getProduct() {
      try {
        setIsLoading(true);

        const res = await fetch(`https://fakestoreapi.com/products`, {
          signal: controller.signal,
        });

        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getProduct();

    return () => {
      controller.abort();
    };
  }, []);


  return (
    <>
      <Header
        basket={basket}
        onSetMoving={setMoving}
        data={data}
        onSetData={setData}
      />
      {isLoading ? (
        <Skeleton />
      ) : moving ? (
        <>
        <div>
        {basket.map((product) => (
          <Basket
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            basket={basket}
            onSetBasket={setBasket}
            onTotalPrice={setTotalPrice}
          />
        ))}
        </div>
        <div className="totalPrice">
          <p>Total Price: ${totalPrice}</p>
        </div>
        </>
      ) : (
        <div className="container-card">
          {data.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              category={item.category}
              data={data}
              basket={basket}
              onSetBasket={setBasket}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
