import styled from "styled-components"

const DashboardWrapper = styled.main<{ $fullWidth: boolean }>`
    background: ${props => props.theme.background};
    width: ${props => props.$fullWidth ? "84dvw" : "100dvw"}; //sidebar is 16%, (84 + 16 )equivalent to 100%

    @media screen and (max-width:500px) {
        width: 100% !important;
    }
`

const Wrapper = styled.section`
    display: flex;
    gap: 13px;
    padding:10px 1.5em;
    height: calc(100dvh - 12dvh); //TopNavbar is 10dvh, (90 + 10) equivalent to 100dvh

    @media screen and (max-width: 550px) {
        flex-direction: column;
    }
`

const LeftContainer = styled.div`
        flex: 2.3;
        flex-direction: column;
        display: flex;
        height: 100%;
        gap: 13px;
`

const RightContainer = styled.div`
        flex: 1;
        flex-direction: column;
        display: flex;
        height: 100%;
        gap: 13px;

        @media screen and (max-width: 550px) {
            flex-direction: column-reverse;
        }
`

export { DashboardWrapper, Wrapper, LeftContainer, RightContainer }