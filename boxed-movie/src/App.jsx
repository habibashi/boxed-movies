import { useContext } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Popular from "./components/popular/Popular";
import SearchMovie from "./components/search/SearchMovie";
import TopRated from "./components/top-Rated/TopRated";
import SearchContext from './store/Search-provider';
import Upcoming from "./components/upcoming/Upcoming";

function App() {
  const { searchInput } = useContext(SearchContext);

  return (
    <>
      <div className='container-fluid m-0 p-0'>
        <NavBar />
        {searchInput.length > 0 && <SearchMovie onSearch={searchInput} />}
        <Popular />
        <TopRated />
        <Upcoming />
      </div>
    </>
  )
}

export default App;
