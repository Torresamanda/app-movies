import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;
`

export const ModalInfo = styled.div `
    width: 400px;
    height: 500px;

    background-color: rgba(0, 0, 0, 0.9);
`

export const Img = styled.img`
    width: 18px;

`