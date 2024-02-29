type ElButtonProps = {
    id: string;
    label: string;
    testid?: string;
    addCss?: string;
    disabled?: boolean;
    onClicked: (id: string) => void;
};

export const ElButton = (props: ElButtonProps) => {
    const {
        id,
        label,
        onClicked,
        addCss,
        disabled = false,
        testid = "testid-not-set",
    } = props;

    const cssClass = (): string => {
        const result = [
            "font-bold py-1 px-2 inline-flex justify-center rounded-md border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        ];

        if (disabled) {
            result.push(
                "bg-gray-500 text-gray-300 opacity-50 cursor-not-allowed"
            );
        } else {
            result.push(
                "bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-300"
            );
        }

        if (addCss) {
            result.push(addCss);
        }

        return result.join(" ").trim();
    };

    const handleClick = () => {
        if (!disabled) {
            onClicked(id);
        }
    };

    return (
        <button
            aria-label={label}
            data-testid={testid}
            disabled={disabled}
            onClick={handleClick}
            className={cssClass()}
        >
            <span className="name">{label}</span>
        </button>
    );
};
