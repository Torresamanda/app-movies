import React from "react";

import { imgURL } from "../../Config/key";

import { ContainerMovie, Title, SectionInfos, Imagem, MovieVoting } from './style'

export default function AllMovie(props) {
    return (
        <ContainerMovie>
            <>
                {
                    props.movies.map((movie) => (
                        <>
                            {movie.poster_path &&
                                <Imagem src={imgURL + movie.poster_path} alt={movie.title} />
                            }
                            <SectionInfos>
                                <Title>{movie.title}</Title>
                                {movie.vote_average ? <MovieVoting>{movie.vote_average}</MovieVoting> : null}
                            </SectionInfos>
                        </>
                    ))
                }
            </>
        </ContainerMovie>
    )
}