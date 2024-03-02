import { ElText, ElToggle } from "@/components/primitives";
import { ItemInterface } from "../../../models/items/Item.interface";

type Props = {
    testId: string;
    model: ItemInterface;
    onItemSelect: (item: ItemInterface) => void;
    isLast?: boolean;
};

export const Item = ({ model, onItemSelect, testId, isLast }: Props) => {
    const handleItemClick = (item: ItemInterface) => {
        onItemSelect(item);
    };

    const getClassName = () => {
        let css =
            "item flex items-center justify-between cursor-pointer border border-l-4 list-none rounded-sm px-3 py-3";

        if (model.selected) {
            css += " font-bold bg-pink-200 hover:bg-pink-100 selected";
        } else {
            css += " text-gray-500 hover:bg-gray-100";
        }
        if (isLast) {
            css += " border-b-0";
        }

        return css.trim();
    };

    return (
        <li
            data-testid={testId}
            className={getClassName()}
            onClick={() => handleItemClick(model)}
        >
            <ElText testid={`${testId}-text`} tag="div" text={model.name} />
            <ElToggle testid={`${testId}-toggle`} checked={model.selected} />
        </li>
    );
};
