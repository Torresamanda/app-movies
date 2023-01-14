import { Link } from 'react-router-dom'

import { Container, SectionButtons, ImgRandom,Button } from './style'

import RandonMovie from './RandomMovies'

import favicon from '../../Img/faviconTwo.png'

export default function Random(props) {
    return (
        <Container>
            <RandonMovie/>

            <SectionButtons>
                <Button onClick={props.getMovies}>
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