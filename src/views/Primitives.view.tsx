import { ElButton, ElText, ElToggle } from "@/components/primitives";
import { ElIconAlert } from "@/components/primitives/icons";
import { useModal } from "@/components/primitives/modals/useModal";
import { useState } from "react";

export const PrimitivesView = () => {
    const [state, setState] = useState({
        toggleItemState: [
            { id: "toggle-a", checked: true },
            { id: "toggle-b", checked: false },
            { id: "toggle-c", checked: false },
        ],
    });

    const onButtonClicked = (id: string) => {
        console.log(id);
    };

    const onToggleClicked = (id: string) => {
        console.log(`You clicked the"${id}"toggle`);
        const stateItem = state.toggleItemState.find((item) => item.id === id);
        if (stateItem) {
            stateItem.checked = !stateItem.checked;
            setState({ ...state });
        }
    };

    const onOpenDialogClicked = async (id: string) => {
        if (id === "open-modal-1") {
            const modal = useModal({
                cancelLabel: "Cancel",
                confirmLabel: "Ok",
            });

            const result = await modal.prompt(
                "Do you want to delete this record?"
            );
            console.log(result);
        }

        if (id === "open-modal-2") {
            const modal = useModal({
                cancelLabel: "Cancel",
                confirmLabel: "Confirm?",
                longDesc: "This has also a longer description and an icon",
                icon: ElIconAlert,
                iconAddClass: "text-red-600",
            });

            const result = await modal.prompt("Do you confirm this action?");
            console.log(result);
        }
    };

    return (
        <div className="primitives">
            <ElText tag="h1" addCss="text-gray-500" text="Primitives" />
            <ElText tag="h2" addCss="text-gray-500" text="ElText examples:" />
            <div className="p-6 border">
                <ElText
                    tag="h2"
                    addCss="text-red-500"
                    text="Here ElText will render a <h2> element"
                />
                <ElText
                    tag="p"
                    addCss="text-red-700"
                    text="Here ElText will render a <p> element"
                />
            </div>

            <ElText tag="h2" addCss="text-gray-500" text="ElButton examples:" />
            <div className="p-6 border">
                <ElButton
                    id="my-button-1"
                    disabled={false}
                    label="This is a button"
                    onClicked={onButtonClicked}
                />
                <ElButton
                    id="my-button-2"
                    disabled
                    label="This is a disabled button"
                    addCss="ml-2"
                    onClicked={onButtonClicked}
                />
                <ElButton
                    id="open-modal-1"
                    disabled={false}
                    label="Open modal 1"
                    addCss="ml-2"
                    onClicked={onOpenDialogClicked}
                />
                <ElButton
                    id="open-modal-2"
                    disabled={false}
                    label="Open modal 2"
                    addCss="ml-2"
                    onClicked={onOpenDialogClicked}
                />
            </div>

            <ElText tag="h2" addCss="text-gray-500" text="ElToggle examples:" />
            <div className="p-6 border">
                <ElToggle
                    id="toggle-a"
                    checked={
                        state.toggleItemState.find(
                            (item) => item.id === "toggle-a"
                        )?.checked
                    }
                    disabled={false}
                    onClicked={onToggleClicked}
                />
                <ElToggle
                    id="toggle-b"
                    checked={
                        state.toggleItemState.find(
                            (item) => item.id === "toggle-b"
                        )?.checked
                    }
                    disabled={true}
                    addCss="ml-2"
                    onClicked={onToggleClicked}
                />
                <ElToggle
                    id="toggle-c"
                    checked={
                        state.toggleItemState.find(
                            (item) => item.id === "toggle-c"
                        )?.checked
                    }
                    disabled={false}
                    addCss="ml-2"
                    onClicked={onToggleClicked}
                />
            </div>
        </div>
    );
};
