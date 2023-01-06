import React from "react";
import Youtube from "react-youtube";

import { BACKDROP_PATH } from "../Config/key";

import { Poster, PosterButton, PosterContent, ContainerMovies, H1 } from './style'

export default function PosterMovie({ movie, playing, playingSeries, setPlayingSerie, trailer, setPlaying, trailerSerie }) {

    return (
        <ContainerMovies>
            <>
                {movie ? (
                    <>
                        <Poster
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), 
                                                  url(${BACKDROP_PATH}${movie.backdrop_path})`
                            }}
                        />

                        {(playing ? playing : playingSeries ) ? (
                            <>
                                <Youtube
                                    videoId={(trailer.key ? trailer.key : trailerSerie.key)}
                                    className={'youtube-container amru'}
                                    containerClassName={'youtube-container amru'}
                                    opts={{
                                        width: '80%',
                                        height: '90%',
                                        playerVars: {
                                            autoplay: 1,
                                            controls: 0,
                                            cc_load_policy: 0,
                                            fs: 0,
                                            iv_load_policy: 0,
                                            modestbranding: 0,
                                            rel: 0,
                                            showinfo: 0
                                        }
                                    }}
                                />
                                <PosterButton className="close-video" onClick={() => {
                                    setPlaying(false)
                                    setPlayingSerie(false)
                                }}>
                                    Fechar Trailer
                                </PosterButton>
                            </>
                        ) : (
                            <div className='center-max-size'>
                                <PosterContent className='poster-content'>
                                    {trailer ? (
                                        <PosterButton
                                            className={'button play-video'}
                                            onClick={() =>  {
                                                setPlaying(true)
                                                setPlayingSerie(true)
                                            }}
                                            type='button'
                                        >
                                            Iniciar Trailer
                                        </PosterButton>
                                    ) : (
                                        'Desculpe, não foi encontrado trailer para esse filme'
                                    )}
                                    <H1>{movie.title ? movie.title : movie.name}</H1>
                                    <p>{movie.overview ? movie.overview : 'Não há sinopse para este filme'}</p>
                                </PosterContent>
                            </div>
                        )}
                    </>
                ) : null}
            </>
        </ContainerMovies>
    )
}