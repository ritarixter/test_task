import { SET_CARDS, SET_ERROR } from "../../actions/card/card";

type TCardsInitialState = {
  cards: Array<any>;
  isError: boolean;
  //isLoading: boolean;
};

const cardsInitialState: TCardsInitialState = {
  cards: [],
  isError: false
  //isLoading: false
};

export const cardReducer = (
  state = cardsInitialState,
  action: any
): TCardsInitialState => {
  switch (action.type) {
    case SET_CARDS:
      return {...state, cards: action.payload, isError: false}
    case SET_ERROR:
      return {...state, isError:true}
    
    default: {
      return state;
    }
  }
};