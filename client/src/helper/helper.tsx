import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import axios from "axios";

export const attemptsNumber = (result: []) => {
  return result.filter((r) => r !== undefined).length;
};

export const earnPointsNumber = (result: [], answers: [], point: any) => {
  return result
    // eslint-disable-next-line eqeqeq
    .map((ele, i) => answers[i] == ele)
    .filter((i) => i)
    .map((i) => point)
    .reduce((acc, curr) => acc + curr, 0);
};

export const flagResult = (totalPoints: any, earnPoints: any) => {
  return (totalPoints * 50) / 100 < earnPoints;
};

export const AuthRoute = ({ children }: any) => {
  const auth = useSelector((state: any) => state.result.userId);
  return auth ? children : <Navigate to={"/"} replace></Navigate>;
};

/** get server data */
export const getServerData = async (url: string, callback: any) => {
  const data = await (await axios.get(url))?.data;
  return callback ? callback(data) : data;
};

/** post server data */
export const postServerData = async (
  url: string,
  result: any,
  callback: any
) => {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
};
