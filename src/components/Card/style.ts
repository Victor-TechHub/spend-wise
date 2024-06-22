import styled from "styled-components"

const CardWrapper = styled.article`
    flex: 0.5;
    background: transparent;
    border: none;
    display: flex;
    gap: 13px;
    overflow-y: hidden;

    @media screen and (max-width: 550px) {
        overflow-x: scroll;
        flex: 2 !important;

        &::-webkit-scrollbar{
            display: none;
        }
    }
`

const Card = styled.article`
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.bg_3};
    background: ${props => props.theme.bg_3};
    transition: 500ms;
    padding: .5em 1em;
    
    :is(div) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;

        b {
            font-size: 1.5rem;
            font-weight: 600;
            color: ${props => props.theme.color};
        }

        p {
            color: ${props => props.theme.textGray};
        }

        i {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 35px;
            width: 35px;
            border-radius: 50%;
        }

        span {
            color: ${props => props.theme.textGray};
        }

        legend {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    
    @media screen and (max-width: 550px) {
        min-width: 210px;
        height: 150px;
    }
`

const Rate = styled.legend<{ $type: string }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.$type === "rise" ? "rgb(39, 163, 65,0.1)" : "rgb(242, 126, 121,0.1)"};
    color: ${props => props.$type === "rise" ? "rgb(39, 163, 65)" : "rgb(242, 126, 121)"};
    border-radius: 10px;
    padding: 2px 5px;
`

export { CardWrapper, Card, Rate }