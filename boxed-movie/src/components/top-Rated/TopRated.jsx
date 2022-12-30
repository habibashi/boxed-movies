import classes from './TopRated.module.css';
import { useEffect, useState } from 'react';
import Card from '../card/Card';

const TopRated = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const getTopRated = async () => {
            const response = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=87c5413076a3b5fe9972da817ec29abe");
            if (!response.ok) {
                throw new Error('request Failed!');
            }
            const data = await response.json();

            const loadedShows = [];
            for (const movie of data.results) {
                loadedShows.push({
                    id: movie.id,
                    name: movie.name.slice(0, 13),
                    date: movie.first_air_date,
                    rate: movie.vote_average,
                    vote: movie.vote_count,
                    image: movie.poster_path
                });
            };
            setShows(loadedShows);
        }
        getTopRated();
    }, []);


    return (
        <div className="pt-1 px-4">
            <div className="rounded-1 p-2" id={classes.banner}>
                <span className='p-2' id={classes.text}><i style={{ color: 'gold' }} className="bi bi-star-fill"></i> Top Rated</span>
            </div>
            <div id={classes.card} className='d-flex my-3 py-3'>
                {shows.map((show) => (
                    <Card
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        rate={show.rate}
                        vote={show.vote}
                        image={show.image}
                        date={show.date}
                    />
                ))}
            </div>
        </div>
    )
};

export default TopRated;