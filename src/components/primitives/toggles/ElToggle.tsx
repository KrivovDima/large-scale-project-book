type ElToggleProps = {
    id?: string;
    testid?: string;
    checked?: boolean;
    disabled?: boolean;
    addCss?: string;
    onClicked?: (id: string | undefined) => void;
};

export const ElToggle = (props: ElToggleProps) => {
    const {
        id,
        onClicked,
        addCss,
        checked = false,
        disabled = false,
        testid = "testid-not-set",
    } = props;

    const cssClass = (): string => {
        const result = [
            "relative inline-flex flex-shrink-0 h-6 w-12 border-1 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none",
        ];

        if (checked) {
            result.push("bg-green-400");
        } else {
            result.push("bg-gray-300");
        }
        if (disabled) {
            result.push("opacity-40 cursor-not-allowed");
        }
        if (addCss) {
            result.push(addCss);
        }

        return result.join(" ").trim();
    };

    const innerCssClass = (): string => {
        const result = [
            "bg-white shadow pointer-events-none inline-block h-6 w-6 rounded-full transform ring-0 transition duration-200",
        ];

        if (checked) {
            result.push("translate-x-6");
        } else {
            result.push("translate-x-0");
        }

        return result.join(" ").trim();
    };

    const handleClick = () => {
        if (!disabled) {
            onClicked?.(id);
        }
    };

    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            disabled={disabled}
            className={cssClass()}
            onClick={handleClick}
            data-testid={testid}
        >
            <span className={innerCssClass()} />
        </button>
    );
};
