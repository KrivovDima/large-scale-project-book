import { FC, HTMLAttributes } from "react";

type ElTextProps = {
    testid?: string;
    id?: string;
    addCss?: string;
    tag?: string;
    text: string;
};

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
    as?: string;
    id?: string;
    "data-testid": string;
}

const Component: FC<ComponentProps> = ({ as: Tag = "p", ...otherProps }) => (
    <Tag {...otherProps} />
);

export const ElText = (props: ElTextProps) => {
    const { tag, text, addCss, id, testid = "testid-not-set" } = props;

    const cssClass = () => {
        const classes = ["p-1"];
        if (addCss) {
            classes.push(addCss.trim());
        }
        return classes.join(" ").trim();
    };

    return (
        <Component as={tag} id={id} data-testid={testid} className={cssClass()}>
            {text}
        </Component>
    );
};
