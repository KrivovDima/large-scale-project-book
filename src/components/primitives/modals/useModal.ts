import { createElement } from "react";
import { ModalProps } from "./ModalProps.interface";
import { ElModal } from "./ElModal";
import ReactDOM from "react-dom";

let instance!: any; //ElModal;
const domTargetId = "modal";

export const useModal = (props: ModalProps) => {
    if (!instance) {
        let domTarget = document.getElementById(domTargetId);

        if (!domTarget) {
            domTarget = document.createElement("div");
            domTarget.setAttribute("id", domTargetId);
            document.body.appendChild(domTarget);
        }

        const reactModal = createElement(ElModal, props, null);

        instance = ReactDOM.render(reactModal, domTarget);
    }

    instance.updateProps(props);

    return instance;
};
