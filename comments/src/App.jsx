import React, { useRef, useState } from "react";
import AddComment from "./components/AddComment";
import Comments from "./container/Comments";
import Post from "./components/Post";
import "./App.css";
import Rate from "./components/Rate";
function App() {
  
const [isReplay, setIsReplay] = useState(false);
const [name, setName] = useState("");
const ref = useRef();


  return (
    <div className="app">
      <Post />
      <Rate />
      <AddComment 
      ref={ref} 
      name={name}
      isReplay={isReplay}
      onSetIsReplay={setIsReplay} />
      <Comments 
      refElement={ref} 
      setName={setName}
      onSetIsReplay={setIsReplay} />
    </div>
  );
}

export default App;
