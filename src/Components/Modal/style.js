import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;

`

export const ModalInfo = styled.div`
    width: 500px;
    height: 500px;

    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Img = styled.img`
    width: 23px;
    cursor: pointer;
    margin-bottom: 8px;

`

export const ImgClose = styled.img`
    width: 15px;
    cursor: pointer;
    position: absolute;
    bottom: 75%;
    right: 0px;
    left: 62%;

`

export const H3 = styled.h3`
    font-size: 18px;
    transition: 0.5s;

    &:hover {
      color: red;
    }
`

export const Sociais = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px 0px 20px 0px;
    gap: 35px;

    border-bottom: 1px solid gray;


`

export const AvatarImg = styled.img`
    border-radius: 50%;
    width: 120px;
    margin-bottom: 30px;
`