import { useSelector, useDispatch } from "react-redux";
import { addMessage, removeMessage } from "../slices/messageBoardSlice";
import { useState } from "react";
import { messageSlice } from "../slices/messageBoardSlice";

function MessageBoard() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target[0].value) {
      return;
    }
    dispatch(addMessage(e.target[0].value));
  }
  const message = useSelector((state) => {
    return state.message;
  });
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
            />
          </label>
          <button className="submit-message-button">Submit</button>
        </form>
      </div>
      <div className="board">
        {message.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => dispatch(removeMessage(index))}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
