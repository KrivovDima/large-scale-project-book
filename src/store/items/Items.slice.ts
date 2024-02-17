import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemsStateInterface } from "./models";
import { ItemInterface } from "@/models/items/Item.interface";

const initialItemsState: ItemsStateInterface = {
  items: [],
  loading: false,
};

export const itemsStoreSlice = createSlice({
  name: "itemsStoreSlice",
  initialState: initialItemsState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setItems: (state, action: PayloadAction<ItemInterface[]>) => {
      // update our state:
      // set our items
      state.items = action.payload || [];
      // set loading to false so the loader will be hidden in the UI
      state.loading = false;
    },
    setItemSelected: (state, action: PayloadAction<ItemInterface>) => {
      const item = action.payload;
      const found = state.items.find((o) => o.id === item.id) as ItemInterface;
      found.selected = !found.selected;
    },
  },
});
