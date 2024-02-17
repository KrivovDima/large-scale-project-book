import { useEffect } from "react";
import { ItemInterface } from "../models/items/Item.interface";
import { ItemsList } from "../components/items/ItemsList.component";
import { useAppStore } from "../store";

function ItemsView() {
  const { itemsStore } = useAppStore();

  const { loading, items } = itemsStore.getters;

  const onItemSelect = (item: ItemInterface) => {
    itemsStore.actions.toggleItemSelected(item);
  };
  useEffect(() => {
    itemsStore.actions.loadItems();
  }, []);

  return (
    <div>
      <ItemsList loading={loading} items={items} onItemSelect={onItemSelect} />
    </div>
  );
}

export default ItemsView;
