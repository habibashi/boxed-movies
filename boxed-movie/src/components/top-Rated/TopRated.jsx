import classes from './TopRated.module.css';
import { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import Card from '../card/Card';

const TopRated = () => {
    const [shows, setShows] = useState([]);

    const { getRequest: getTopRated } = useHttp();

    useEffect(() => {
        const transformTasks = (data) => {
            const loadedShows = [];
            for (const movie of data.results) {
                if (movie.poster_path !== null) {
                    loadedShows.push({
                        id: movie.id,
                        name: movie.title.slice(0, 13),
                        date: movie.release_date,
                        rate: movie.vote_average,
                        vote: movie.vote_count,
                        image: movie.poster_path
                    });
                }
            };
            setShows(loadedShows);
        };
        getTopRated(
            { url: "https://api.themoviedb.org/3/movie/top_rated?api_key=87c5413076a3b5fe9972da817ec29abe" },
            transformTasks
        );
    }, [getTopRated]);


    return (
        <div className="pt-1 px-4">
            <div className="rounded-1 p-2" id={classes.banner}>
                <span className='p-2' id={classes.text}><i style={{ color: 'gold' }} className="bi bi-star-fill"></i> Top Rated</span>
            </div>
            <div id={classes.card} className='d-flex  mb-3 mt-1 py-3'>
                {shows.map((show) => (
                    <Card
                        id={show.id}
                        key={show.id}
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