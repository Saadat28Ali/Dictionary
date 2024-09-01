import { createContext, useState } from "react";

const MeaningContext = createContext<any>(null);

function MeaningProvider({ child }: {child: any}) {
    const [currMeaning, setCurrMeaning] = useState<{[key: string]: string}>({});
    return (
    <MeaningContext.Provider value={{"getter": currMeaning, "setter": setCurrMeaning}}>
        {child}
    </MeaningContext.Provider>
    );
}

export default MeaningContext;
export { MeaningProvider };