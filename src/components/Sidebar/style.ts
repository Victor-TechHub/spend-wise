import styled from "styled-components"

const SideBarContainer = styled.nav`
   background-color: ${props => props.theme.bg_3};
   width: 16%;
   padding-inline: 1.4rem;
`

const NavigationLinks = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: .5rem;
   list-style-type: none;
   margin-block-start: 1rem;
   margin-block-end: 2.5em;

   li {
      display: flex;
      gap: 1rem;
      align-items: center;
      color: #777;
      padding: 12px;
      width: 100%;
      cursor: pointer;
      border-radius: 7px;
      transition: 200ms;
      font-weight: 450;

      &:hover {
      background: ${props => props.theme.secondary};
      color: #FFFFFF;
      filter: drop-shadow(0 10px 1rem rgba(55, 124, 247, 0.78));
      }
   }

   header {
      font-weight: 600;
      color: ${props => props.theme.color};
      font-size: 1.1em;
   }
`
export {
   SideBarContainer,
   NavigationLinks
}