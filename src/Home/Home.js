import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { APIKey, MOVIE_API, SEARCH_API_MOVIE, DISCOVER_API_MOVIE } from '../Components/Config/key'

import Navbar from "../Components/Navbar";
import PosterMovie from "../Components/Movies/Poster";
import AllMovie from "../Components/Movies/AllMovies/index";

function App() {
  const [searchKey, setSearchKey] = useState('')
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState("Carregando Filmes")
  const [trailer, setTrailer] = useState()
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMovies = async event => {
    if (event) {
      event.preventDefault()
    }

    const { data } = await axios.get(
      `${searchKey ? SEARCH_API_MOVIE : DISCOVER_API_MOVIE}`,
      {
        params: {
          api_key: APIKey,
          query: searchKey,
          language: 'pt-BR'
        }
      }
    )

    setMovies(data.results)
    setMovie(data.results[0])

    if (data.results.length) {
      await fetchMovie(data.results[0].id)
    }

  }

  const fetchMovie = async id => {
    const { data } = await axios.get(`${MOVIE_API}movie/${id}`,
      {
        params: {
          api_key: APIKey,
          append_to_response: 'videos',
          language: 'pt-BR'
        }
      }
    )

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        vid => vid.name === 'Trailer Oficial'
      )
      setTrailer(trailer ? trailer : data.videos.results[0])
    }

    setMovie(data)
  }


  return (
    <ContainerMovies >
      <Navbar
        onSubmit={fetchMovies}
        onInput={(event) => setSearchKey(event.target.value)}
      />

      {/* {movies.length ? (
        <>
          {movie ? (
            <PosterMovie
              movies={movies}
              playing={playing}
              setPlaying={setPlaying}
              trailer={trailer}
              setTrailer={setTrailer}
            />
          ) : null}
        </>
      ) : 'Desculpe, não foi encontrado filme'} */}

      <RenderMovie className={'center-max-size'}>
        <AllMovie
          movies={movies}
        />
      </RenderMovie>

    </ContainerMovies>
  );
}

export default App;

const RenderMovie = styled.section`
    background: linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50));
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 30px;
`

const ContainerMovies = styled.main`
    .center-max-size {
        max-width: 1080px;
        margin: 0 auto;
        padding: 40px 30px;
    }
    
    .youtube-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .close-video {
        position: absolute;
        z-index: 2;
        bottom: 10px;
        left: 10px;
    }
`