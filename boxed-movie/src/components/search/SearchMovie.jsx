import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';
import classes from '../top-Rated/TopRated.module.css';
import useHttp from '../../hooks/useHttp';

const SearchMovie = ({ onSearch }) => {
    const [shows, setShows] = useState([]);
    const navigate = useNavigate();

    const { getRequest: search } = useHttp();


    useEffect(() => {
        const transformTasks = (data) => {
            const loadedShows = [];
            for (const movie of data.results) {
                if (movie.poster_path !== null) {
                    loadedShows.push({
                        id: movie.id,
                        name: movie.title,
                        date: movie.release_date,
                        rate: movie.vote_average,
                        vote: movie.vote_count,
                        image: movie.poster_path
                    });
                }
            };
            setShows(loadedShows);
        };
        search(
            { url: `https://api.themoviedb.org/3/search/movie?api_key=87c5413076a3b5fe9972da817ec29abe&query=${onSearch}` },
            transformTasks
        );
    }, [search, onSearch]);

    return (
        <div className="pt-3 px-4">
            <div className="rounded-2 p-2" id={classes.banner}>
                <span className='p-2' id={classes.text}><i style={{ color: 'lightblue' }} className="bi bi-search"></i> Search Movies</span>
            </div>
            <div id={classes.card} className='d-flex  mb-3 mt-1 py-3'>
                {shows.map((show) => (
                    <Card
                        onClick={() => navigate(`/view/${show.id}`)}
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

export default SearchMovie;