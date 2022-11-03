import React, { useState } from "react";
import { Questions } from "./Questions";

/** redux store import */
import { useDispatch, useSelector } from "react-redux";

import {
  MOVE_NEXT_QUESTION,
  MOVE_PREV_QUESTION,
  PUSH_RESULT_ACTION,
} from "../redux/Types/actionTypes";
import { Navigate } from "react-router";

const Quiz = () => {
  const {
    questions: { queue, trace },
    result,
  }: any = useSelector((state) => state);

  const [checked, setChecked] = useState(undefined);

  const dispatch = useDispatch();

  function onNext() {
    dispatch({
      type: MOVE_NEXT_QUESTION,
    });

    if (result.result.length <= trace) {
      dispatch({
        type: PUSH_RESULT_ACTION,
        payload: checked,
      });
    }

    setChecked(undefined);
  }

  function onPrev() {
    dispatch({
      type: MOVE_PREV_QUESTION,
    });
  }

  function onChecked(id: any) {
    setChecked(id);
  }

  /** All questions finished */
  if (trace > 0 && trace === queue?.length) {
    return <Navigate to={"/result"} replace></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Digiaccel Learning Quiz System</h1>

      {/* display questions */}
      <Questions onChecked={onChecked} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "3rem",
        }}
      >
        {trace !== 0 && trace !== queue.length ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        {trace !== queue?.length ? (
          <button className="btn next" onClick={onNext}>
            Next
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
