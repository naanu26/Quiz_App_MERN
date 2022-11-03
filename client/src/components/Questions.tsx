/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/** Custom Hook */
import { useFetchQestion } from "../hooks/FetchQuestion";
import { UPDATE_RESULT_ACTION } from "../redux/Types/actionTypes";

interface QuestionsProps {
  onChecked: (id: any) => void;
}

export const Questions = ({ onChecked }: QuestionsProps) => {
  const [checked, setChecked] = useState<any>(undefined);

  const [{ isLoading, serverError }]: any = useFetchQestion();

  const trace = useSelector((state: any) => state.questions.trace);
  const questions = useSelector((state: any) => state.questions.queue[trace]);
  const result = useSelector((state: any) => state.result.result);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UPDATE_RESULT_ACTION,
      payload: {
        trace,
        checked,
      },
    });
  }, [checked]);

  function onSelect(i: number) {
    onChecked(i);
    setChecked(i);
    dispatch({
      type: UPDATE_RESULT_ACTION,
      payload: {
        trace,
        checked,
      },
    });
  }

  if (isLoading) {
    return <h3 className="text-light">Loading.....</h3>;
  }
  if (serverError) {
    return (
      <h3 className="text-light">{serverError || "Unknown Error Occured"}</h3>
    );
  }

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q: any, id: number) => {
          return (
            <li key={q}>
              <input
                type="radio"
                value={checked}
                name="options"
                id={`q${id}-option`}
                onChange={() => onSelect(id)}
              />

              <label className="text-primary" htmlFor={`q${id}-option`}>
                {q}
              </label>
              <div
                className={`check ${result[trace] === id ? "checked" : "null"}`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
