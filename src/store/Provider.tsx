import Context from "./Context";
import {ReactNode, useReducer} from 'react';
import reducer, { initState } from "./reducer";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

function Provider ({children}: Props) {
    const [state, dispatch] = useReducer(
        reducer,
        initState
    )

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider