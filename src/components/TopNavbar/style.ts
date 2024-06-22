import styled from "styled-components"

const NavContainer = styled.section`
    display: flex;
    gap: 2em;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
    height: 12dvh;

    @media screen and (max-width: 550px) {
        flex-direction: column-reverse;
        height: fit-content;
    }

`

const Greetings = styled.div`
    line-height: 35px;
    h3 {
        color: ${props => props.theme.color};
        display: flex;
        align-items: center;
        gap: .5em;
        font-size: 2em;
        font-weight: 500;
    }

    p {
        color: ${props => props.theme.textGray};
        font-size: 12px;
    }
`
const Actions = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: flex-end;
   gap: 9px;
`

const SingleActionBtn = styled.div`
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.bg_3};
    border-radius: 50%;
    color: ${props => props.theme.textGray};
    cursor: pointer;
    transition: 200ms;

    &:hover {
        transform: scale(1.190);
    }
`

const DoubleActionBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    background: ${props => props.theme.bg_3};
    color: ${props => props.theme.textGray};
    border-radius: 30px;
    width: fit-content;
    padding: 6px;


    span {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.textGray};
        border-radius: 50%;
        height: 25px;
        width: 25px;
        cursor: pointer;
        transition: 200ms;

        &:active {
            transform: scale(0.85);
        }

         &:hover {
        transform: scale(1.190);
    }
    }
`

const UserInfoBtn = styled.section`
    display: flex;
    align-items: center;
    gap: 10px;
    background: ${props => props.theme.bg_3};
    border-radius: 30px;
    width: fit-content;
    padding: 6px;
    color: ${props => props.theme.textGray};

    img {
       height: 35px;
        width: 35px;
        border-radius: 50%;
        object-fit: contain;
    }

    h3 {
        font-weight: 500;
        color: ${props => props.theme.color};
    }
    p {
        font-size: 10px;
        margin-inline-end: 10px;
    }

    @media screen and (max-width: 550px) {
        div, i {
            display: none;
        }
    }
`

export {
    NavContainer,
    Greetings,
    Actions,
    SingleActionBtn,
    DoubleActionBtn,
    UserInfoBtn
}