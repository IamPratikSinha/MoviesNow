import React from 'react';
import axios from "axios";
import { useEffect } from "react";

function Genres({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) {

    const fetchGeners = async () =>{
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US` 
        );
        setGenres(data.genres);
    };

    console.log(genres);

    useEffect(() => {
        fetchGeners();
        return() => {
            setGenres({});
        }
    }, [])
    return (
        <div style ={ {padding: "6px 0"}}>
             
        </div>
    )
}

export default Genres
