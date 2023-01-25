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
    width: 20px;
    cursor: pointer;

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
    font-size:18px;
`

export const Sociais = styled.div`
margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`