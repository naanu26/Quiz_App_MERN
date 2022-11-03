import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

/** redux actions */
import { START_EXAMINATION } from "../redux/Types/actionTypes";

interface Question {
  isLoading: boolean;
  apiData: any;
  serverError: any;
}

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState<Question>({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    /** async function fetch backend data */
    (async () => {
      try {
        let [{ questions, answers }] = await getServerData(
          `http://localhost:8080/api/questions`,
          (data: any) => data
        );

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: { questions, answers } }));

          /** dispatch an action */
          dispatch({
            type: START_EXAMINATION,
            payload: { questions, answers },
          });
        } else {
          throw new Error("No Question Avalibale");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};
