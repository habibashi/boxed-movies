import classes from './View.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const View = () => {
    const [singleMovie, setSingleMovie] = useState({});
    const params = useParams();
    console.log(params.id)

    useEffect(() => {
        const views = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=87c5413076a3b5fe9972da817ec29abe`);
            if (!response.ok) {
                throw new Error('request Failed!');
            }
            const data = await response.json();

            const datas = [];
            for (const name of data.genres) {
                datas.push(name.name);
            }

            let movieDetails = {
                id: data.id,
                name: data.title,
                view: data.overview,
                image: data.backdrop_path,
                rate: data.vote_average,
                vote: data.vote_count,
                date: data.release_date,
            };
            setSingleMovie(movieDetails);
            console.log(datas)
        };
        views();
    }, []);
    console.log(singleMovie)

    return (
        <>
            <div>
                <img className={classes.image}
                    src={`https://image.tmdb.org/t/p/original/${singleMovie.image}`} alt={singleMovie.name} />
            </div>
            <div className='p-3'>
                <h2 id={classes.color}>{singleMovie.name}</h2>
                <div className='d-flex gap-2'>
                    <i style={{ color: 'gold' }} className="bi bi-star-fill"></i>
                    <p id={classes.color}>{singleMovie.rate} • {singleMovie.vote} votes • {singleMovie.date}</p>
                </div>
                <div style={{ maxWidth: '1100px' }}>
                    <p id={classes.color}><strong>Overview: </strong> {singleMovie.view}</p>
                </div>
            </div>
        </>
    )
};

export default View;