import axios from "axios";
import { token, cohortId, baseUrl } from "./constants";

export function cardsLoad() {
  return axios
    .get(`${baseUrl}/${cohortId}/cards`, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => res.data);
}
