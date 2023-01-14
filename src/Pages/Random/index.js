import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

import { 
    Container, 
    Main,
    Img,
    ImgRandom,
    SectionDetails,
    SectionVideo,
    TextNoTrailer,
    H1, 
    Sinopse,
    SectionButtons,
    Button} 
from './style'

import { imgURL, APIKey, TOP_MOVIE, TOP_TV, MOVIE_API, } from '../../Config/key'

import favicon from '../../Img/faviconTwo.png'

export default function Random() {
    const randomPages = Math.floor(Math.random() * 500) + 1

    const [movie, setMovie] = useState({ title: 'Carregando Filmes' })
    const [movies, setMovies] = useState([])

    // const [serie, setSerie] = ({ title: 'Carregando Séries' })
    // const [series, setSeries] = useState([])

    const [trailer, setTrailer] = useState([null])

    useEffect(() => {
        getMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getMovies = async event => {
        if (event) {
            event.preventDefault()
        }

        const { data } = await axios.get(`${TOP_MOVIE}`, {
            params: {
                api_key: APIKey,
                language: 'pt-BR',
                page: randomPages
            }
        })

        setMovie(data.results[0])
        setMovies(data.results)

        if (data.results.length) {
            await getVideosMovies(data.results[0].id)
        }
    }

    const getVideosMovies = async id => {
        const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
            params: {
                api_key: APIKey,
                append_to_response: 'videos',
                language: 'pt-BR'
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                vid => vid.name === 'Trailer Oficial'
            )
            setTrailer(trailer ? trailer : data.videos.results[0])
        }

        setMovie(data)
    }

    return (
        <Container>
            <Main>
                <Img src={imgURL + movie.poster_path} alt={movie.title ? movie.title : movie.name} />

                <SectionDetails>
                    <H1>{movie.title ? movie.title : movie.name}</H1>
                    <Sinopse>{movie.overview ? movie.overview : 'Desculpe, não há sinopse.'}</Sinopse>

                    <SectionVideo>
                        {movies.length ? (
                            <>
                                {trailer ? (
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
                                                    cc_lang_pref: 0,
                                                    fs: 0,
                                                    iv_load_policy: 0,
                                                    modestbranding: 0,
                                                    rel: 0,
                                                    showinfo: 0
                                                }
                                            }}
                                        />
                                    </>
                                ) : <TextNoTrailer>Desculpe, não foi encontrado trailer.</TextNoTrailer>}
                            </>
                        ) : null}
                    </SectionVideo>
                </SectionDetails>
            </Main>
            
            <SectionButtons>
                <Button onClick={getMovies}>
                    <ImgRandom src={favicon} alt="" />
                    Surpreenda-me com filme
                </Button>
                <Link to='/'>
                    <Button>Home</Button>
                </Link>
            </SectionButtons>

        </Container>
    )
}