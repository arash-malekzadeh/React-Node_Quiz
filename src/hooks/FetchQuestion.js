import { useEffect, useState } from "react";
import data from "../components/database/data";
import { useDispatch } from "react-redux";
import * as Action from "../redux/question_reducer";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getdata, setgetdata] = useState({
    isloading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setgetdata((prev) => ({ ...prev, isloading: true }));

    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setgetdata((prev) => ({ ...prev, isloading: false }));
          setgetdata((prev) => ({ ...prev, apiData: question }));
          dispatch(Action.startExamAction(question));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setgetdata((prev) => ({ ...prev, isloading: false }));
        setgetdata((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [getdata, setgetdata];
};
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (error) {
    console.log(error);
  }
};
