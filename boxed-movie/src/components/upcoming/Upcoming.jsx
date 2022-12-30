import classes from './Upcoming.module.css';

const Upcoming = () => {
    return (
        <div className="pt-1 px-4">
            <div className="rounded-2 p-2" id={classes.background}>
                <span className='p-2' id={classes.text}><i style={{ color: 'aqua' }} className="bi bi-fast-forward-fill"></i> Upcoming</span>
            </div>
        </div>
    )
};

export default Upcoming;