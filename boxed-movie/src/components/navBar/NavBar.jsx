import { useContext } from 'react';
import SearchContext from '../../store/Search-provider'
import classes from './NavBar.module.css';

const NavBar = () => {
    const { searchInput, searchHandler } = useContext(SearchContext);

    const searchChangeHandler = (event) => {
        searchHandler(event.target.value)
    };

    return (
        <nav className="navbar navbar-expand-lg py-3" id={classes.background}>
            <div className="container-fluid d-flex align-items-center gap-4 ">
                <img className="ps-1" width='120px' src="https://i.imgur.com/aeUnzDa.png" alt='...' />
                <ul className="navbar-nav me-auto mb-lg-0">
                    <li>
                        <input
                            id={classes.search}
                            size="25"
                            className="form-control w-5"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                            value={searchInput}
                            onChange={searchChangeHandler}
                        />
                    </li>
                </ul>
            </div>
        </nav>

    )
};

export default NavBar;