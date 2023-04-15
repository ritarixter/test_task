import { ICard } from "../../../models/ICard";
import {
  ADD_LIKE,
  REMOVE_LIKE,
  SET_CARDS,
  SET_ERROR,
  TCardsActions,
} from "../../actions/card/card";

type TCardsInitialState = {
  cards: Array<ICard>;
  isError: boolean;
  //isLoading: boolean;
};

const cardsInitialState: TCardsInitialState = {
  cards: [],
  isError: false,
  //isLoading: false
};

export const cardReducer = (
  state = cardsInitialState,
  action: TCardsActions
): TCardsInitialState => {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, cards: action.cards, isError: false };
    case SET_ERROR:
      return { ...state, isError: true };
    case ADD_LIKE: 
    return { ...state };//Как поставить лайк именно нужной карточке

    default: {
      return state;
    }
  }
};
