import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-3" id={classes.background}>
            <div className="container-fluid">
                <img className="ps-1" width='8%' src="https://i.imgur.com/aeUnzDa.png" alt='...' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <input id={classes.background} style={{ width: "650px" }} className="form-control ms-5 me-2 w-5" type="search" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;