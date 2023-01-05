import styled from "styled-components";

export const ContainerMovies = styled.main`
    .center-max-size {
        max-width: 1080px;
        margin: 0 auto;
        padding: 40px 90px;
        color: #FFF;
        position: relative;
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

export const Poster = styled.section`
    min-height: 550px;
    background-size: cover;
    background-position: top center;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-bottom: 50px;
`

export const PosterButton = styled.button`
    margin: 20px 0;
    background: #0F1014;
    color: white;
    border: none;
    outline: none;
    padding: 10px 15px;
    cursor: pointer;
    transition: box-shadow 0.2s;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 1px solid gray;

    &:hover {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    }
`

export const PosterContent = styled.section`
    width: 80%;
    position: absolute;
    bottom: 150px;
`

export const Title = styled.a`
    font-weight: bold;
    font-size: 28px;
    margin-top: 5px;
    text-decoration: none;
    color: #FFF;
`

export const H1 = styled.h1`
    font-size: 38px;
    margin-top: 0;
    line-height: 1;
    margin-bottom: 15px;
`