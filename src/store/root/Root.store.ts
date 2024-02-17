import { configureStore } from "@reduxjs/toolkit";
import { itemsStoreSlice, useItemsActions, useItemsGetters } from "../items";
import { RootStoreInterface } from "./models";
import { useDispatch } from "react-redux";

export const rootStore = configureStore({
  reducer: {
    itemState: itemsStoreSlice.reducer,
  },
});

export type RootStateInterface = ReturnType<typeof rootStore.getState>;

export function useAppStore(): RootStoreInterface {
  const commit = useDispatch();

  return {
    itemsStore: {
      actions: useItemsActions(commit),
      getters: useItemsGetters(),
    },
  };
}

type IAppState = ReturnType<typeof rootStore.getState>;

export function getAppState(): IAppState {
  const appState = rootStore.getState();

  return {
    ...appState,
  };
}
