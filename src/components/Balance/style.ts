import styled from "styled-components"

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    position: absolute;
    background: rgb(0, 0, 0, 0.090);
    width: 100%;
    height: 100%;
    transition: 500ms;
    /* pointer-events: none; */
`

const BalanceContainer = styled.form`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1em;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.bg_3};
    flex: 1;
    background: ${props => props.theme.bg_3};
    transition: 500ms;

    section {
        background: rebeccapurple;
    }

    &:hover ${ButtonWrapper} {
        transform: translateY(0);
    }
`


export { BalanceContainer, ButtonWrapper }