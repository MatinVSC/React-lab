import { useEffect, useRef, useState } from "react";
function SelectBox() {
  const [data, setData] = useState([]);
  const [query, SetQuery] = useState("");
  const [hasTopic, setHasTopic] = useState(false);
  const refInput = useRef();


  const closeStyle = {
    padding: 0,
    height: 0,
    overflow: "hidden",
  };

  const handelChangeTopic = (e) => {
    const value = e.target.value;
    SetQuery(value);
  };

  const handelClickItem = (topicName) => {
    refInput.current.value = topicName; 
    setHasTopic(true);   
  };

useEffect( () => {
  async function fetchTopic () {
    try {
      const response = await fetch(`http://127.0.0.1:8000/?search=${query}`)
      const data = await response.json()
      setData(data.data.matchedTechs);
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchTopic()
  
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
