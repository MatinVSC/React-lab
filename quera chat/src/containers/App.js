import React, { useState } from 'react';
import MessageForm from '../components/MessageForm/MessageForm';
import MessageList from '../components/MessageList/MessageList';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  
  return (
    <div className="App">
      <MessageList
        messages={data}
      />
      <MessageForm
        onSetData={setData}
        data={data}
      />
    </div>
  );
}

export default App;
