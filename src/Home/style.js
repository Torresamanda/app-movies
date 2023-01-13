import styled from "styled-components"

export const RenderMovie = styled.section`
    /* background: linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)); */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 40px;

`

export const Container = styled.main`
    .center-max-size {
        max-width: 1080px;
        margin: 0 auto;
        padding: 40px 30px ;

    } 
`
export const BoxButton = styled.div`
    background: linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50));
    width: 100%;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

`