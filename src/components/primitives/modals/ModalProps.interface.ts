import { ComponentClass, FC } from "react";

export interface ModalProps {
    testid?: string;
    cancelLabel: string;
    confirmLabel: string;
    title?: string;
    longDesc?: string;
    primaryButtonType?: string;
    icon?: string | FC<{ addCss: string }> | ComponentClass<{ addCss: string }>;
    iconAddClass?: string;
}
