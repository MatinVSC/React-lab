import React, { forwardRef } from "react";
import SelectBox from "./SelectBox";
// import SelectBox from "./SelectBox";
const AddComment = forwardRef(function AddComment({name, isReplay, onSetIsReplay}, ref) {
  return (
    <div ref={ref} className="ac-wrapper">
      {/* <h2 className="addCommentTitle">
        {name ? `response to : ${name}` : ` Write your comment:....`}
      </h2> */}
      {isReplay ? (
        <h2 className="addCommentTitle">response to : {name}</h2>
      ) : (
        <h2 className="addCommentTitle">Write your comment:....</h2>
      )}
      <form action="" className="form">
        <input placeholder="name" type="text" />
        <input placeholder="email" type="text" />
        {isReplay && (
          <SelectBox />
        )}
        <textarea
          placeholder="message..."
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Send</button>
        {isReplay && (
          <button onClick={() => onSetIsReplay(false)}>cansel</button>
        )}
      </form>
    </div>
  );
});

export default AddComment;

// Write your comment: {props.name}