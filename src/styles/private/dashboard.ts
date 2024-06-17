import styled from "styled-components"

const DashboardWrapper = styled.main`
    background: ${props => props.theme.background};
    width: 84%; //sidebar is of 16% equivalent to 100dvh
`

export { DashboardWrapper }