import { Dispatch, SetStateAction, createContext } from "react";
type ISearchContext = {
    searchText: string,
    setSearchText?: Dispatch<SetStateAction<string>>
}

const defaultState = {
    searchText: ""
}

export const SearchContext = createContext<ISearchContext>(defaultState);