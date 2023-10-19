import { createContext } from "react";
import { contextType, stateType } from "../@types/types";


export const initialState: stateType = {
    mobileSideBar: false
}
const Store = createContext<contextType>({
    state: initialState,
    setState: () => { }
})
export default Store