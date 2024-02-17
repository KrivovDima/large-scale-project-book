import { Dispatch } from "react";
import { itemsStoreSlice } from "./Items.slice";
import { ItemInterface } from "@/models/items/Item.interface";
import { useSelector } from "react-redux";
import { RootStateInterface } from "../root/Root.store";
import { apiClient } from "../../api-client";

export function useItemsActions(commit: Dispatch<any>) {
    const mutation = itemsStoreSlice.actions;

    const actions = {
        loadItems: async () => {
            commit(mutation.setLoading(true));

            const data = await apiClient.items.fetchItems();

            commit(mutation.setItems(data));
        },
        toggleItemSelected: async (item: ItemInterface) => {
            commit(mutation.setItemSelected(item));
        },
    };

    return actions;
}

export function useItemsGetters() {
    return {
        loading: useSelector(
            (state: RootStateInterface) => state.itemState.loading
        ),
        items: useSelector(
            (state: RootStateInterface) => state.itemState.items
        ),
    };
}

export interface ItemsStoreInterface {
    actions: ReturnType<typeof useItemsActions>;
    getters: ReturnType<typeof useItemsGetters>;
}
