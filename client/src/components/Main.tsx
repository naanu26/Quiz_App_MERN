import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SET_USER_ID } from "../redux/Types/actionTypes";
import "../styles/Main.css";

export default function Main() {
  const inputRef = React.createRef<HTMLInputElement>();

  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState<string>();

  const dispatch = useDispatch();

  const onChangeHandler = () => {
    setInputValue(inputRef?.current?.value);
    setError(false);
  };

  const startQuiz = () => {
    if (inputValue) {
      dispatch({
        type: SET_USER_ID,
        payload: inputValue,
      });
    }
    if (!inputValue) {
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1 className="title text-light">Digiaccel Learning Quiz System</h1>

      <ol>
        <h3>Rules for the Quiz:</h3>
        <li>You will be asked 10 questions one after another.</li>
        <li>
          Scores will be calculated on basis of correct and incorrect answers.
        </li>
        <li>
          Each question has four choices. You can choose only one options.
        </li>
        <li>You can change the answer before submission.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form
        id="form"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="Username"
          required
          onChange={onChangeHandler}
        />
        {error && (
          <div style={{ color: "wheat", marginTop: "10px" }}>
            Please add the UserName
          </div>
        )}
      </form>

      <div className="start" onClick={startQuiz}>
        <Link className="btn" to={inputValue?.length ? "quiz" : "/"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
