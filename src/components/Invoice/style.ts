import styled from "styled-components"

const InvoiceContainer = styled.section`
    border-radius: 15px;
    border: 1px solid ${props => props.theme.bg_3};
    flex: 1;
    background: ${props => props.theme.bg_3};
    transition: 500ms;

`

export { InvoiceContainer }