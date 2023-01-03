import classes from './View.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const View = () => {
    const [singleMovie, setSingleMovie] = useState({});
    const params = useParams();

    useEffect(() => {
        const views = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=87c5413076a3b5fe9972da817ec29abe`);
            if (!response.ok) {
                throw new Error('request Failed!');
            }
            const data = await response.json();

            const genresData = [];
            for (const nameGenres of data.genres) {
                genresData.push(nameGenres.name, ", ");
            }

            let movieDetails = {
                id: data.id,
                name: data.title,
                view: data.overview,
                image: data.backdrop_path,
                rate: data.vote_average,
                vote: data.vote_count,
                date: data.release_date,
                genres: [...genresData],
                runtime: data.runtime
            };
            setSingleMovie(movieDetails);
        };
        views();
    }, [params.id]);

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
                <div style={{ maxWidth: '700px' }}>
                    <p id={classes.color}><strong>Overview: </strong> {singleMovie.view}</p>
                </div>
                <div>
                    <p id={classes.color}><strong>Genres: </strong>{singleMovie.genres}</p>
                </div>
                <div>
                    <p id={classes.color}><strong>Runtime: </strong>{singleMovie.runtime} min</p>
                </div>
            </div>
        </>
    )
};

export default View;