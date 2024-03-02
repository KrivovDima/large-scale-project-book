import { FC } from "react";
import { ItemInterface } from "../../models/items/Item.interface";
import { Item } from "./children/Item.component";
import { Loader } from "../shared/Loader.component";

type Props = {
    loading: boolean;
    items: ItemInterface[];
    onItemSelect: (item: ItemInterface) => void;
};

export const ItemsList: FC<Props> = ({ items, onItemSelect, loading }) => {
    let element;

    if (loading) {
        element = <Loader />;
    } else {
        element = (
            <ul>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        model={item}
                        onItemSelect={onItemSelect}
                        testId={`item-${item.id}`}
                        isLast={index === items.length - 1}
                    />
                ))}
            </ul>
        );
    }

    return (
        <div>
            <h3>Items-loading: {String(loading)}:</h3>
            <h1>Items</h1>
            {element}
        </div>
    );
};
