import { createStore, action, Action, createTypedHooks } from "easy-peasy";

interface StoreModel {
  code: string;
  setCode: Action<StoreModel, string>;
}

const code = `
#set page(width: 15cm, height: auto, margin: 1cm)

$ a^2 + b^2 = c^2 $

`.trim();

const store = createStore<StoreModel>({
  code,
  setCode: action((state, payload) => {
    state.code = payload;
  }),
});

export default store;

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
