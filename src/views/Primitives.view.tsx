import { ElText } from "@/components/primitives/text/ElText";

export const PrimitivesView = () => {
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
        </div>
    );
};
