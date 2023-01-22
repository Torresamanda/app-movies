import React from "react";
import { Link } from "react-router-dom";

import { Header, Form, Title, Box, Button, Search, SubmitSeachButton, Img, ImgAvatar } from './style.js'

import SearchIcon from '../../Img/searchIcon.svg'
import RandomIcon from '../../Img/faviconTwo.png'
import Avatar from '../../Img/avatar.png'

import Modal from '../Modal/index'

export default function Navbar(props, setSearchKey) {
    return (
        <Header>
            <Title href="/">+Movies</Title>

            <Form onSubmit={props.onSubmit}>
                <Box>
                    <Link to="/random">
                        <Button>
                            <Img src={RandomIcon} alt="search" />
                            Surpreenda-me
                        </Button>
                    </Link>

                    <Button onClick={props.onClick}>{props.handleText}</Button>

                    <Search
                        type="text"
                        id="search"
                        value={props.searchKey}
                        setSearchKey={props.setSearchKey}
                        onInput={props.onInput}
                    />

                    <SubmitSeachButton>
                        <Img src={SearchIcon} alt="search" onClick={() => {setSearchKey('')}}/>
                    </SubmitSeachButton>


                    <ImgAvatar src={Avatar} alt="Avatar" onClick={() => console.log('click')}/>

                </Box>
            </Form>
        </Header>
    )
}