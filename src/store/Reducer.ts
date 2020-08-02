import { initialState, ApplicationState } from "./Store";
import { Action, ON_LOADING, OFF_LOADING } from "./Action";

export const rootReducer = (
  state = initialState,
  action: Action
): ApplicationState => {
  switch (action.type) {
    case ON_LOADING:
      return { loading: true };
    case OFF_LOADING:
      return { loading: false };
    default:
      return state;
  }
};
