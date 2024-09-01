import { createContext, useState } from "react";

const FetchingContext = createContext<any>(false);

function FetchingProvider({ child }: {child: any}) {
    const [fetching, setFetching] = useState<boolean>(false);
    return (<FetchingContext.Provider value={{getter: fetching, setter: setFetching}}>
        {child}
    </FetchingContext.Provider>)
}

export default FetchingContext;
export { FetchingProvider };