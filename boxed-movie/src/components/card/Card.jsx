import { useNavigate } from "react-router-dom";
import classes from "./Card.module.css"

const Card = ({ id, name, rate, vote, image, date }) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/view/${id}`)}>
            <div className="card" style={{ width: '11rem', height: '330px' }} id={classes.card}>
                <img src={`https://image.tmdb.org/t/p/w400/${image}`} style={{ height: '240px' }} className="card-img-top" alt={name} />
                <div className="card-body">
                    <p className='p-0 m-0' id={classes.p}>{rate} • {vote} votes • {date}</p>
                    <span className='p-0 m-0' id={classes.span}>{name}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;