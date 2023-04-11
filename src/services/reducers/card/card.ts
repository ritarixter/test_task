
type TOrderInitialState = {
  orderNumber: number | null;
  orderRequest: boolean;
  orderFailed: boolean;
  orderOpen: boolean;
  orderClearIngredient: boolean;
};

const orderInitialState: TOrderInitialState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  orderOpen: false,
  orderClearIngredient: false,
};

export const cardReducer = (
  state = orderInitialState,
  action: any
): TOrderInitialState => {
  switch (action.type) {

    default: {
      return state;
    }
  }
};