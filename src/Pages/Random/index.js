import { Container, ImgRandom, ContainerButton, IndexButton } from './style'

import RandonMovie from './RandomMovies'
import RandomSeries from './RandomSeries'
import { useState } from 'react'

import RandomIcon from '../../Img/faviconTwo.png'

import Navbar from '../../Components/Navbar/index'

export default function Random() {

    const [isShowMovie, setIsShowMovie] = useState(true)
    const [isShowSerie, setIsShowSerie] = useState(false)

    const handleClick = () => {
        setIsShowMovie(current => !current)
        setIsShowSerie(current => !current)
    }

    const handleText = () => {
        switch (isShowMovie === true && isShowSerie === true) {
            case isShowMovie:
                return 'Surpreenda-me com um filme'
            case isShowSerie:
                return 'Surpreenda-me com uma série'

            default:
                break;
        }
    }

    return (
        <>
            <Navbar visibility='hidden'/>
            <Container>
                {isShowMovie && <RandonMovie />}
                {isShowSerie && <RandomSeries />}

                <ContainerButton>

                    <IndexButton onClick={() => handleClick()}>
                        <ImgRandom src={RandomIcon} alt={'random icon'} />
                        {handleText()}
                    </IndexButton>

                </ContainerButton>
            </Container>
        </>
    )
}


