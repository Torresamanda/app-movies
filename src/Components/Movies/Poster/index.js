import React from "react";
import Youtube from "react-youtube";

import { BACKDROP_PATH } from "../../Config/key";

import { Poster, PosterButton, PosterContent, ContainerMovies, H1 } from './style'

export default function PosterMovie({ movies, movie, playing, trailer, setPlaying, setTrailer }) {

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

                        {playing ? (
                            <>
                                <Youtube
                                    setTrailer={setTrailer}
                                    videoId={trailer.key}
                                    className={'youtube-container amru'}
                                    containerClassName={'youtube-container amru'}
                                    opts={{
                                        width: '90%',
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
                                <PosterButton onClick={() => setPlaying(false)}>
                                    close
                                </PosterButton>
                            </>
                        ) : (
                            <div className='center-max-size'>
                                <PosterContent className='poster-content'>
                                    {trailer ? (
                                        <PosterButton
                                            className={'button play-video'}
                                            onClick={() => setPlaying(true)}
                                            type='button'
                                        >
                                            Play Trailer
                                        </PosterButton>
                                    ) : (
                                        'Desculpe, não foi encontrado trailer para esse filme'
                                    )}
                                    <H1>{movie.title}</H1>
                                    <p>{movie.overview}</p>
                                </PosterContent>
                            </div>
                        )}
                    </>
                ) : null}
            </>
        </ContainerMovies>
    )
}