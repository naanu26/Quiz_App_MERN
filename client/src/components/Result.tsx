import React, { useEffect } from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import {
  RESET_QUESTION_REDUCER,
  RESET_RESULT_REDUCER,
} from "../redux/Types/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  attemptsNumber,
  earnPointsNumber,
  flagResult,
  postServerData,
} from "../helper/helper";

export const Result = () => {
  const dispatch = useDispatch();

  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state: any) => state);

  const totalPoints = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earnPoints = earnPointsNumber(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  useEffect(() => {
    if (result.length === 0 && !userId) return;
    const postData = {
      result,
      username: userId,
      attempts,
      points: earnPoints,
      achived: flag ? "Passed" : "Failed",
    };
    postServerData(
      "http://localhost:8080/api/result",
      postData,
      (data: any) => data
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onRestart() {
    console.log("on Restart");
    dispatch({
      type: RESET_RESULT_REDUCER,
    });
    dispatch({
      type: RESET_QUESTION_REDUCER,
    });
  }

  return (
    <div className="container">
      <h1 className="title text-light">Digiaccel Learning Quiz System Result</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span
            className="bold"
            style={{ color: "#FF10F0", textTransform: "uppercase" }}
          >
            {userId}
          </span>
        </div>
        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span
            className="bold"
            style={flag ? { color: "green" } : { color: "red" }}
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>
    </div>
  );
};
