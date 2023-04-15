import { ICard } from "../../../models/ICard";
import { cardsLoad } from "../../../utils/api";
import { AppDispatch, AppThunk } from "../../store";

export const SET_CARDS = "SET_CARDS";
export const SET_ERROR = "SET_ERROR";
export const ADD_LIKE = "ADD_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

interface IGetCards {
  readonly type: typeof SET_CARDS;
  readonly cards: Array<ICard>;
}

interface IAddLike {
  readonly type: typeof ADD_LIKE;
  readonly card: { index: number; likes: number };
}

interface IRemoveLike {
  readonly type: typeof REMOVE_LIKE;
  readonly card: { index: number; likes: number };
}

interface IGetCardsFailed {
  readonly type: typeof SET_ERROR;
}

export type TCardsActions =
  | IGetCards
  | IGetCardsFailed
  | IAddLike
  | IRemoveLike;

export function getCards(cards: Array<ICard>): IGetCards {
  return { type: SET_CARDS, cards };
}

export function addLike(index: number): IAddLike {
  return { type: ADD_LIKE, card: { index: index, likes: 1 } };
}

export function removeLike(index: number): IRemoveLike {
  return { type: REMOVE_LIKE, card: { index: index, likes: 0 } };
}

export function getCardsFailed(): IGetCardsFailed {
  return { type: SET_ERROR };
}

export const getCardsData: AppThunk = () => (dispatch: AppDispatch) => {
  cardsLoad()
    .then((res) => {
      const data:Array<ICard> = res
        .map((item: ICard, index: number) => ({
          name: item.name,
          link: item.link,
          index: index,
          likes: 0
        }))
        .slice(10);
      console.log(data);
      dispatch(getCards(data));
    })
    .catch((err) => {
      dispatch(getCardsFailed());
      console.log(`Ошибка при загрузке ингредиентов: ${err}`);
    });
};

/*
export const getCardsData: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    cardsLoad()
      .then((res) => {
        const ApiData = res.data;
        dispatch(getCards(ApiData));
      })
      .catch((err) => {
        dispatch(getCardsFailed());
        console.log(`Ошибка при загрузке ингредиентов: ${err}`);
      });
  };
};*/
