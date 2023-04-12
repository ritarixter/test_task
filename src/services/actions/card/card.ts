export const SET_CARDS = "SET_CARDS";
export const SET_ERROR = "SET_ERROR";

interface IGetCards {
  readonly type: typeof SET_CARDS;
  readonly cards: Array<any>;
}

interface IGetCardsFailed {
  readonly type: typeof SET_ERROR;
}

export type TCardsActions = IGetCards;

export function getCards(cards: Array<any>): IGetCards {
  return { type: SET_CARDS, cards };
}

export function getCardsFailed(): IGetCardsFailed {
  return { type: SET_ERROR };
}
