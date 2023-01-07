import React, { useEffect, useState } from "react";
import axios from "axios";

import { RenderMovie, Container } from './style'

import {
  APIKey,
  MOVIE_API,
  SEARCH_API_MOVIE,
  DISCOVER_API_MOVIE,
  SEARCH_API_SERIE,
  DISCOVER_API_SERIE
} from '../Components/Config/key'

import Navbar from "../Components/Navbar";
import Poster from "../Components/PosterMoviesAndSeries";
import RenderMoviesAndSeries from "../Components/RenderMoviesAndSeries/index";

export default function Home() {
  const [searchKey, setSearchKey] = useState('')

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState("Carregando Filmes")
  const [trailer, setTrailer] = useState()
  const [playing, setPlaying] = useState(false)
  const [isShowMovies, setIsShowMovies] = useState(true)

  const [series, setSeries] = useState([])
  const [serie, setSerie] = useState("Carregando Séries")
  const [trailerSerie, setTrailerSerie] = useState([])
  const [playingSerie, setPlayingSerie] = useState(false)
  const [isShowSeries, setIsShowSeries] = useState(false)

  useEffect(() => {
    fetchMovies()
    fetchSeries()
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
          language: 'pt-BR',
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
          language: 'pt-BR',
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

  const fetchSeries = async event => {
    if (event) {
      event.preventDefault()
    }

    const { data } = await axios.get(
      `${searchKey ? SEARCH_API_SERIE : DISCOVER_API_SERIE}`,
      {
        params: {
          api_key: APIKey,
          query: searchKey,
          language: 'pt-BR',
        }
      }
    )

    setSeries(data.results)
    setSerie(data.results[0])

    if (data.results.length) {
      await fetchSerie(data.results[0].id)
    }

  }

  const fetchSerie = async id => {
    const { data } = await axios.get(`${MOVIE_API}tv/${id}`,
      {
        params: {
          api_key: APIKey,
          append_to_response: 'videos',
          language: 'pt-BR',
        }
      }
    )

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        vid => vid.name === 'Trailer Oficial'
      )
      setTrailerSerie(trailer ? trailer : data.videos.results[0])
    }
    setSerie(data)
  }

  const selectMovie = movie => {
    fetchMovie(movie.id)
    setPlaying(false)
    setPlayingSerie(false)
    setMovie(movie)
    window.scrollTo(0, 0)
  }

  const selectSerie = serie => {
    fetchSerie(serie.id)
    setSerie(serie)
    setPlaying(false)
    setPlayingSerie(false)
    window.scrollTo(0, 0)
  }

  const renderMovies = () =>
    movies.map(movie => (
      isShowMovies && <RenderMoviesAndSeries selectMovie={selectMovie} key={movie.id} movie={movie} />
    ))

  const renderPosterMovie = () =>
    isShowMovies && 
    <Poster
      key={movie.id}
      movie={movie}
      playing={playing}
      setPlaying={setPlaying}
      trailer={trailer}
    />

  const renderSeries = () =>
    series.map(serie => (
      isShowSeries && <RenderMoviesAndSeries selectMovie={selectSerie} key={serie.id} movie={serie} />
    ))

  const renderSeriePost = () =>
    isShowSeries &&
    <Poster
      key={serie.id}
      movie={serie}
      playing={playingSerie}
      setPlaying={setPlayingSerie}
      trailer={trailerSerie}
    />


  const handleClick = e => {
    setIsShowMovies(current => !current)
    setIsShowSeries(current => !current)
    window.scrollTo(0, 0)
  }

  const handleText = () => {
    switch (isShowMovies === true && isShowSeries === true) {
      case isShowMovies:
        return 'Filmes'
      case isShowSeries:
        return 'Séries'
      default:
        break;
    }
  }

  return (
    <Container>
      <Navbar
        onSubmit={fetchSeries}
        onInput={(event) => {
          setSearchKey(event.target.value)
        }}
        value={searchKey}
      />

      {renderPosterMovie()}
      {/* {renderMoviePost()} */}
      {renderSeriePost()}

      <div>
        <button onClick={() => handleClick()}>{handleText()}</button>
      </div>


      <RenderMovie className={'center-max-size'}>
        {renderMovies()}
        {renderSeries()}
      </RenderMovie>

    </Container>
  );
}


