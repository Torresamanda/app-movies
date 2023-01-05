import React from "react";
import YouTube from "react-youtube";

import { BACKDROP_PATH } from "../../Config/key";

import { Poster } from './style'

export default function PosterMovie(props) {

    return (
        <div>
            {
                props.movies.map((movie, trailer, playing, setPlaying) => (
                    <>
                        <Poster style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), 
                            url(${BACKDROP_PATH + movie.backdrop_path})`
                        }} />

                        {playing ? (
                            <>
                                <YouTube
                                    videoId={trailer.key}
                                    className={'youtube-container amru'}
                                    containerClassName={'youtube-container amru'}
                                    opts={{
                                        width: '100%',
                                        height: '100%',
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
                                <button onClick={() => setPlaying(false)}>
                                    Fechar Trailer
                                </button>
                            </>
                        ) : (
                            <div>
                                <div>
                                    {trailer ? (
                                        <button
                                            className={'button play-video'}
                                            onClick={() => setPlaying(true)}
                                            type='button'>Abrir Trailer
                                        </button>
                                    ) : 'Desculpe não foi encontrado trailer'}
                                    <h1>{movie.title}</h1>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        )
                        }
                    </>
                ))
            }
        </div>
    )
}
