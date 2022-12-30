import classes from "./Card.module.css"

const Card = ({ id, name, rate, vote, image, date }) => {
    return (
        <div>
            <div className="card" style={{ width: '11rem' }} id={classes.background}>
                <img src={`https://image.tmdb.org/t/p/w400/${image}`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <p className='p-0 m-0' id={classes.p}>{rate} • {vote} votes • {date}</p>
                    <span className='p-0 m-0' id={classes.span}>{name.length < 14 && <span>{name}</span>}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;