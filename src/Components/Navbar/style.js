import styled from "styled-components";

export const Header = styled.header`
    margin: 0 auto;
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
`

export const Form = styled.form`
    position: relative;
`

export const Title = styled.a`
    font-weight: bold;
    font-size: 25px;
    text-decoration: none;
    color: #FFF;

    &:hover{
        color: red;
    }
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8px;
`

export const Button = styled.button`
    margin-right: 20px;
    width: 125px;
    height: 25px;
    font-size: 13px;

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

    gap: 5px;

    &:hover {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    }
`

export const Search = styled.input`
    border: 1px solid;
    height: 28px;
    background-color: transparent;
    padding: 5px 10px;
    border-radius: 25px;
    color: white;
`

export const SubmitSeachButton = styled.button`
    position: absolute;
    background-color: transparent;
    color: #FFF;
    border: none;
    cursor: pointer;
    right: 65px;
`

export const Img = styled.img`
    width: 16px;
    gap: 5px;
`

export const ImgAvatar = styled.img`
    width: 35px;
    border-radius: 50%;
    margin-left: 15px;
`