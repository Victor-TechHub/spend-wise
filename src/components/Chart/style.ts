import styled from "styled-components"

const Chart = styled.section`
    position: relative;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.bg_3};
    flex: 1;
    background: ${props => props.theme.bg_3};
    transition: 500ms;
    padding: 1em;

    @media screen and (max-width: 550px){
        min-height: 300px;
    }
`

const ActionButtons = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
`

export { Chart, ActionButtons }