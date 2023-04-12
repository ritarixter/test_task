import axios from "axios";
import { token, cohortId, baseUrl } from "./constants";
import { getCards, getCardsFailed } from "../services/actions/card/card";
import { AppDispatch } from "../services/store";

export const cardsLoad = () => {
  return async (dispatch: AppDispatch) => {
    try {
    const response = await axios
      .get(`${baseUrl}/${cohortId}/cards`, {
        headers: {
          authorization: token,
        },
      })
     dispatch(getCards(response.data))
    }
    catch (e) {
      dispatch(getCardsFailed())
    }
  };
};


