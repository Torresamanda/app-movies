import React from "react";

import { imgURL } from "../Config/key";

import { ContainerMovie, Title, SectionInfos, Imagem, MovieVoting } from './style'

export default function RenderMoviesAndSeries({ movie, selectMovie }) {
    return (
        <ContainerMovie onClick={() =>  selectMovie(movie)}>
            <>

                {movie.poster_path &&
                    <Imagem src={imgURL + movie.poster_path} alt={movie.title} />
                }
                <SectionInfos>
                    <Title>{movie.title}</Title>
                    {movie.vote_average ? <MovieVoting>{movie.vote_average}</MovieVoting> : null}
                </SectionInfos>

            </>
        </ContainerMovie>
    )
}