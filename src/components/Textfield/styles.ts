import styled from "styled-components";

export const InputField = styled.section`
    display: flex;
    flex-direction: column;
    gap: .3em;

`

export const Field = styled.section<{ $error?: boolean }>`
        display: flex;
        align-items: center;
        border: 1px solid ${props => props.theme.gray};
        border-radius: 5px;
        padding-inline-end: 1em;
        transition: 250ms;
        border-color: ${props => props.$error && "red"};

          &:hover {
                border-color: ${props => props.theme.grayLight};
            }

        input {
        width: 100% !important;
        padding: 1em;
        background: transparent;
        border: none;
        outline: none;
        color: ${props => props.theme.color};          
        }
`
export const ErrorElement = styled.span`
    font-size: 10px;
    color: red;
`