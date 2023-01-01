import Popular from "../components/popular/Popular";
import TopRated from "../components/top-Rated/TopRated";
import { useContext } from "react";
import Upcoming from "../components/upcoming/Upcoming";
import SearchMovie from "../components/search/SearchMovie";
import SearchContext from "../store/Search-provider";

const MovieShow = () => {
    const { searchInput } = useContext(SearchContext);

    return (
        <>
            {searchInput.length > 0 && <SearchMovie onSearch={searchInput} />}
            <Popular />
            <TopRated />
            <Upcoming />
        </>
    )
};

export default MovieShow;