import styled from "styled-components"

const SignUpContainer = styled.section`
    display: flex;
    background: ${({ theme }) => theme.background};
    height: 100dvh;
    color: ${({ theme }) => theme.color};

    :is(div) {
        flex: 1;
        padding: 1em 5em;
    }

    div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

 section {
    img {
        display: block;
        object-fit: contain;
        width: 110%;
        filter: drop-shadow(0 70px 5em #646cffaa);
    }
 }
    }

    @media screen and (max-width: 550px){
        div:last-child {
            display: none;
        }
    }
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Select = styled.select`
    border: 1px solid ${props => props.theme.gray};
    padding: .6em 1.5em;
    background: ${props => props.theme.background};
    border-radius: 5px;
    color: ${props => props.theme.color};
    cursor: pointer;
    outline: 0;
    transition: 300ms;


    &:hover {
        border-color: ${props => props.theme.grayLight};
    }
`

const Wrapper = styled.section<{ $margin?: string }>`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 1em;
    margin-inline: auto;
    margin-block-start: ${props => props.$margin || "4em"};


    :is(span) {
        display: flex;
    }

    @media screen and (max-width: 550px){
     width: 100% !important;
    }
`

const FormContainer = styled.form`
    display: grid;
    gap: 1em;
    width: 80%;
    margin: auto;

    :is(a) {
        color: ${props => props.theme.color};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }

      @media screen and (max-width: 550px){
     width: 100% !important;
    }

`

const LoginSDKs = styled(FormContainer)`

h2 {
    font-size: 2em;
    font-weight: 400;
}

p {
    color:${props => props.theme.textGray};
}
`

const ButtonSDK = styled.button`
    background:  ${props => props.theme.gray};
    border: 1px solid  ${props => props.theme.gray};
    padding: .6em;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .6em;
    cursor: pointer;
    color: ${props => props.theme.color};
    transition: 350ms;


    :is(i) {
        color: ${props => props.theme.color}
    }

    &:hover {
        border-color: ${props => props.theme.grayLight};
    }
`

const ButtonGroup = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const OR = styled.div`
    display: flex;
    gap: .8em;
    align-items: center;

    legend {
        color: ${props => props.theme.textGray};
    }

    i {
        flex: 1;
        height: 1px;
        background: ${props => props.theme.grayLight};
    }
`

const LoginButton = styled.button`
    background:  ${props => props.theme.gray};
    border: 1px solid  ${props => props.theme.gray};
    padding: .7em;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .6em;
    cursor: pointer;
    color: ${props => props.theme.color};
    transition: 350ms;

    &:disabled {
        cursor: not-allowed;
        opacity: .7;
    }

     &:hover {
        border-color: ${props => props.theme.grayLight};
    }
`


export {
    SignUpContainer,
    Header,
    Select,
    FormContainer,
    LoginSDKs,
    Wrapper,
    ButtonSDK,
    ButtonGroup,
    OR,
    LoginButton
}