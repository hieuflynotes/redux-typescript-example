import { createStore } from "redux";
import { rootReducer } from "./Reducer";

export type ApplicationState = {
  loading: boolean;
};
export const initialState: ApplicationState = { loading: true };
export const store = createStore(rootReducer);