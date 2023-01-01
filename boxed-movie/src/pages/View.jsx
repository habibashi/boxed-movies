import classes from './View.module.css';
import { useEffect, useState } from 'react';

const View = () => {
    const [singleMovie, setSingleMovie] = useState({});

    useEffect(() => {
        const views = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/tv/119501?api_key=87c5413076a3b5fe9972da817ec29abe`);
            if (!response.ok) {
                throw new Error('request Failed!');
            }
            const data = await response.json();

            const movieDetails = [];
            // for (const movie of data) {
            if (data.poster_path !== null) {
                movieDetails.push({
                    id: data.id,
                    name: data.name,
                    view: data.overview,
                    vote: data.vote_count * 10,
                    image: data.backdrop_path
                });
            }
            // };
            setSingleMovie(movieDetails);
        }
        views();
    }, []);
    console.log(singleMovie)

    return (
        <div
            className={`border ${classes.image}`}
            style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original//9PFonBhy4cQy7Jz20NpMygczOkv.jpg'}`,
            }}
        >
        </div>
    )
};

export default View;