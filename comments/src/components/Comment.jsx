import Avatar from "../assets/avatar.png";
function Comment({ name, message, children, refElement, setName, onSetIsReplay}) {
  
  const handelScorol = () => {
    refElement.current.scrollIntoView();
    setName(name);
    onSetIsReplay(true);
  };

  return (
    <div className="box">
      <div className="content">
        <div className="avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="texts">
          <div className="header">
            <h3 className="name">{name}</h3>
            <button onClick={handelScorol}>replay</button>
          </div>
          <p className="message">{message}</p>
        </div>
      </div>
      <div className="children">
        {children.map(({ id, name, message, children }) => (
          <Comment
            key={id}
            id={id}
            name={name}
            message={message}
            children={children}
            refElement={refElement}
            setName={setName}
            onSetIsReplay={onSetIsReplay}
          />
        ))}
      </div>
    </div>
  );
}

export default Comment;
