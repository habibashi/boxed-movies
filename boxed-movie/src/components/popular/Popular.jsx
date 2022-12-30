import classes from './Popular.module.css';

const Popular = () => {

    return (
        <div className="pt-3 px-4">
            <div className="rounded-2 p-2" id={classes.background}>
                <span className='p-2' id={classes.text}><i style={{ color: 'red' }} className="bi bi-arrow-up-right"></i> Popular</span>
            </div>
        </div>
    )
};

export default Popular;