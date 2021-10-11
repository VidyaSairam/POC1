import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import styled from 'styled-components'
export default function Layout({ children }) {
    const Wrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        ${'' /* top: 64px; */}
        ${'' /* position: relative; */}
        height: calc(100% - 64px);
        width: 100%;
        ${'' /* flex: auto; */}
        flex-direction: column;    }
`;
        const Main = styled.main`
        position: fixed;
        height: calc(100% - 185px);
        width: 100%;
        padding: 1em;
        display: flex;
        flex-direction : 'column';
        overflow-y: scroll;    @media (min-width: 700px) {
            flex: 1;
            margin-left: 220px;
            height: calc(100% - 64px);
            width: calc(100% - 220px);
        }
    `;
    return (
        <React.Fragment>
            <Header />

            <Wrapper>
                <Menu />
                <Main>
                    {children}
                </Main>
            </Wrapper>
        </React.Fragment>
    )
}
