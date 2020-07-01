import React from 'react';
import styled from 'styled-components';

const DEFAULT_IMAGE_PLACEHOLDER = "";

const CardContainer = styled.div`
    transition: transform;
    transition-duration: 0.25s;
    color: #ffffff;
    
    &:hover{
        cursor: pointer;
        transform: scale(1.08);
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover:
`;

const StyledRating = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.3rem;
    margin: 0.25rem;
    border-radius: 0.25rem;
    background-color: rgba(0, 0, 0, 0.808);
`;

const StyledRuntime = styled.div`
    position: absolute;
    top:0;
    right:0;
    padding: 0.3rem;
    margin: 0.25rem;
    border-radius: 0.25rem;
    background-color: rgba(0, 0, 0, 0.808);
`;

function handleMovieClick(){

}


function Moviecard(props) {
    const {poster, title, votes} = props.movie;
    const {runtime} = props.movie.details;
    const imageURL = `https://image.tmdb.org`;

    const convertRuntime = num => {
        let hours = num / 60;
        let remHours = Math.floor(hours);
        let mins = (hours - remHours) * 60;
        let remMins = Math.round(mins);
        return `${remHours}h ${remMins}m`;
    };

    const convertedRuntime = convertRuntime(runtime);

    return (
        <CardContainer>
            <StyledImage 
                src={poster ? imageURL: DEFAULT_IMAGE_PLACEHOLDER}
                alt={`${title} poster`}
                onClick={handleMovieClick}
            />
            <StyledRating>{votes}</StyledRating>
            <StyledRuntime>{convertedRuntime}</StyledRuntime>
        </CardContainer>
    )
}

export default Moviecard
