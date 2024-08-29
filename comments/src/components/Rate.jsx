import { AiOutlineStar as StartIconEmpty } from "react-icons/ai";
import { AiFillStar as StartIconFull } from "react-icons/ai";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Rate() {
  const [star, setStar] = useState([
    { id: 1, hover: false, clicked: false },
    { id: 2, hover: false, clicked: false },
    { id: 3, hover: false, clicked: false },
    { id: 4, hover: false, clicked: false },
    { id: 5, hover: false, clicked: false },
  ]);
  const [rating, setRating] = useState({});

  const hoverHandler = (id) => {
    let hoverData = star.map((item) => {
      return item.id <= id
        ? { ...item, hover: true }
        : { ...item, hover: false };
    });
    setStar(hoverData);
  };

  const blurHandler = () => {
    const blurData = star.map((item) => {
      return { ...item, hover: false };
    });
    setStar(blurData);
  };

  const submitRateHandler = (id) => {
    
    const perviousClicked = star.map( item => ({...item, hover: false}));
    const clearClicked = star.map( item => ({...item, clicked: false, hover: false}));
    
    let clickStar = clearClicked.map( item => {
      return item.id <= id
      ? { ...item, clicked: true}
      : { ...item, clicked: false};
    });
    setStar(clickStar);
    
    let rateObj = clickStar.filter(obj => obj.clicked === true);
    setRating(rateObj[rateObj.length -1]);

    async function sendRating () {
      
      try {
        const res = await fetch(`http://localhost:8000/posts/`, 
          {method: "PATCH",
            body: JSON.stringify({...rating, rate: rating.id})
          }
        )
        const data = await res.json()
        return data
        
      } catch (error) {
        console.log(error);
        return {status:"error", message: error.toString()}
      }
    };

    const onErrorHappend = (msg) => {
      setStar(perviousClicked)
      toast.error( msg, {
          position: "top-left",
      });
    };

    const onSuccessHappend = (msg) => {
      toast.success(msg, {
          position: "top-left",
      });
    };

    sendRating().then(data=>{
      if (data.status === 'error') {
        onErrorHappend(data.message)
      } else if (data.status === 'success') {
        onSuccessHappend(data.message)
      }
    });
    };
  

  return (
    <>
      <div className="rate-box">
        <h1>Rate : </h1>
        <div className="rate-container">
          {star.map((item) => {
            const shouldIgnoreClick = !!star.find(e=>e.hover);
            return (
            <div
              className="rate"
              key={item.id}
              onPointerOver={() => hoverHandler(item.id)}
              onPointerOut={blurHandler}
              onClick={() => submitRateHandler(item.id)}
            >
              {(!shouldIgnoreClick &&item.clicked) || item.hover ? (
                <StartIconFull />
              ) : (
                <StartIconEmpty />
              )}
            </div>
          )})}
        </div>
      </div>
      <hr />
      <ToastContainer />
    </>
  );
}

export default Rate;

