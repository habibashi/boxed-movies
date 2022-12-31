import React, { useState } from "react";

const SearchContext = React.createContext({
    searchInput: '',
    searchHandler: (searchValue) => { },
});

export const SearchProvider = ({ children }) => {
    const [searchInput, setEnteredSearch] = useState("");

    const searchHandler = (searchValue) => {
        setEnteredSearch(searchValue);
    };

    return (
        <SearchContext.Provider value={{ searchInput, searchHandler }}>
            {children}
        </SearchContext.Provider>
    )
};

export default SearchContext;