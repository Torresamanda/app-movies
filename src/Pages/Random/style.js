import styled from "styled-components";

export const Container = styled.div`
    margin: 2rem 3rem;
    padding: 2rem 3rem;
    display: wrap;
    border-radius: 20px;
    background: linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50));

    .youtube-container {
       height: 285px;
    }

    .movie {
        display: block;
    }
`

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const H1 = styled.h1`
    margin: 3rem 0;
`

export const VoteAverange = styled.p`
    width: 35px;
    background-color: #F6BE27;
    color: #0f1014;
    font-weight: bold;
    border: 1px solid gray;
    padding: 13px;
    font-size: 12px;
    border-radius: 25px;

`

export const RealeseDate = styled.span`
    color: #b3b3b3;
    font-weight: bold;
    margin-top: 1em;
`

export const Sinopse = styled.p`
    color: #b3b3b3;
`

export const Img = styled.img`
    width: 350px;
    border-radius: 1rem;
    margin-bottom: 2rem;
`
export const ImgRandom = styled.img`
    width: 18px;
`

export const SectionDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    max-width: 70%;
    text-align: justify;
`
export const SectionVideo = styled.div`
    margin-top: 40px;
`

export const TextNoTrailer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
`

export const SectionButtons = styled.div`
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    gap: 40px;
`

export const Button = styled.button`
    width: 185px;
    height: 30px;

    background: #e9e6e3;
    color: #0F1014;

    text-align: center;
    float: left;
    position: relative;
    padding: 0;
    cursor: pointer;
    transition: box-shadow 0.2s;
    border: none;
    border-radius: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 8px;

    &:hover {
        box-shadow: 0 2px 2px rgba(255, 254, 254, 0.5);
    }
`


