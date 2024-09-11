import { useEffect, useRef, useState } from "react";
function SelectBox() {
  const [data, setData] = useState([]);
  const [query, SetQuery] = useState("");
  const [hasTopic, setHasTopic] = useState(false);
  const refInput = useRef();
  const intervalRef = useRef();
  const dataRef = useRef();
  const [prevData, setPrevData] = useState([]);

  const closeStyle = {
    padding: 0,
    height: 0,
    overflow: "hidden",
  };

  const handelChangeTopic = (event) => {
    const {value} = event.target;
    SetQuery(value);
  };

  const handelClickItem = (topicName) => {
    refInput.current.value = topicName; 
    setHasTopic(true);   
  };

useEffect( () => {
  const fetchTimeData = () => {
    intervalRef.current = setTimeout( () => {
      async function fetchTopic () {
        try {
          const response = await fetch(`http://127.0.0.1:8000/?search=${query}`)
          const data = await response.json()
          setData(data.data.matchedTechs);
        } catch (error) {
          console.log(error);
        }
      }
      query.length && fetchTopic();
      setPrevData(data)
    }, 2000)
  };
  fetchTimeData()

  return () => {
    clearInterval(intervalRef.current);
  }
}, [query]);


  return (
    <div className="c-box">
      <input onChange={handelChangeTopic} ref={refInput} className="tpc" placeholder="topic" type="text" />
      <div 
      style={hasTopic ? closeStyle : {}} 
      className="c-selectbox">
        {
        data.map(topic => (
          <div key={topic.id}
           onClick={() => handelClickItem(topic.name)} 
           className="item">
        <label htmlFor={topic.id}>{topic.name}</label>
        <input type="radio" name="" id={topic.id} />
        </div>
        ))
        }
        </div>
    </div>
  );
}

export default SelectBox;
