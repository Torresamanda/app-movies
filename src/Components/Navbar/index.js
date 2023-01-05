import React from "react";
import { Link } from "react-router-dom";

import { Header, Form, Title, Box, Button, Search, SubmitSeachButton, Img, ImgAvatar } from './style.js'

import SearchIcon from '../../Img/searchIcon.svg'
import RandomIcon from '../../Img/faviconTwo.png'
import Avatar from '../../Img/avatar.png'

export default function Navbar(props) {
    return (
        <Header>
            <Title href="/">+Movies</Title>

            <Form onSubmit={props.onSubmit}>
                <Box>
                    <Link to='/'>
                        <Button>Séries</Button>
                    </Link>

                    <Link to="/">
                        <Button>
                            <Img src={RandomIcon} alt="search" />
                            Surprenda-me
                        </Button>
                    </Link>

                    <Search
                        type="text"
                        id="search"
                        onInput={props.onInput}
                    />
                    <SubmitSeachButton>
                        <Img src={SearchIcon} alt="search" />
                    </SubmitSeachButton>

                    <Link to="/">
                        <ImgAvatar src={Avatar} alt="" />
                    </Link>
                </Box>
            </Form>
        </Header>
    )
}