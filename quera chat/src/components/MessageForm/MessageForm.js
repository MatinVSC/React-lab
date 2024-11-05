import React, { useEffect, useRef, useState } from 'react';
import './MessageForm.css';

function MessageForm({ onSetData, data }) {
  const [messageSend, setMessageSend] = useState(null);
  const ref = useRef();

  function handleFormSubmit(event) {
    event.preventDefault()
    setMessageSend(ref.current.value)
    reset()
  }

  function reset() {
    ref.current.focus();
    ref.current.value = '';
  }

  useEffect(() => {
    async function fetchData() {
      await fetch(`http://localhost:3001/message/${messageSend}`)
        .then(res => res.json())
        .then(answer => onSetData([...data,
        data[0] = { me: messageSend, body: messageSend },
        data[1] = { body: answer.message }]
        ));
    }

    if (messageSend) {
      fetchData();
    }

  }, [messageSend])

  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          ref={ref}
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
