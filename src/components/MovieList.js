import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const MovieBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 3em 3.5em;

    @media screen and (min-width: 992px) and (max-width: 1199px){
        padding: 2em 2.5em;
    }
    @media screen and (min-width: 768px) and (max-width: 991px){
        padding: 1.5em;
    }
    @media screen and (min-width: 577px) and (max-width: 767px){
        padding: 1em 0.65em;
    }
    @media screen and (max-width: 576px){
        padding: 0.35em;
    }
`;


function MovieList() {
    const displayMovieCards = movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
    ));
    return (
        <MovieBox>
            {displayMovieCards}
        </MovieBox>
    )
}

export default MovieList
