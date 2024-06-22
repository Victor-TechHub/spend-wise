import styled from "styled-components"

const Rate = styled.legend<{ $type: string }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.$type === "rise" ? "rgb(39, 163, 65)" : "rgb(242, 126, 121)"};
    border-radius: 10px;
    padding: 2px 5px;
    cursor: pointer;
    transition: 500ms;

`

const RecentTransactionContainer = styled.section`
    border-radius: 15px;
    border: 1px solid ${props => props.theme.bg_3};
    flex: 1.8;
    background: ${props => props.theme.bg_3};
    transition: 500ms;
    padding: 1em;
    overflow-y: scroll;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-weight: 600;
            color: ${props => props.theme.color};
        }

        i {
            color: ${props => props.theme.color};
        }
    }

     &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${props => props.theme.textGray};
            border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
            background: ${props => props.theme.background}; 
            border-radius: 5px; 
        }
`

const Recents = styled.div<{ $type: string }>`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-block: 15px;

    :is(div:first-child) {
        display: flex;
        align-items: center;
        gap: 5px;

        b{
            color: ${props => props.theme.color};
            font-weight: 600;
        }

        p {
            color: ${props => props.theme.textGray};
            font-size: 10px; 
        }
    }

    :is(div:last-child) {
        display: flex;
        flex-direction: column;
        span:last-child {
            font-size: 10px;
            color: ${props => props.theme.textGray};
        }
        span {
            align-self: flex-end;
        }
    }

    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        transition: 200ms;

    }

    &:hover ${Rate}{
       background: ${props => props.$type === "rise" ? "rgb(39, 163, 65,0.1)" : "rgb(242, 126, 121,0.1)"};
    }

    &:hover img {
        transform: scale(1.3);
    }
`



export { RecentTransactionContainer, Recents, Rate }