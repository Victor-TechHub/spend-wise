import styled from "styled-components"

const SideBarContainer = styled.nav`
   position: relative;
   background-color: ${props => props.theme.bg_3};
   width: 16%;
   padding-inline: 1.4rem;
   height: 100dvh;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 2em;

      @media screen and (max-width: 550px) {
      width: 100%;
   }
`

const NavigationLinks = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: .5rem;
   list-style-type: none;

   :is(a) {
      text-decoration: none;
      width: 100%;
   }

   :is(ul:last-child) {
      flex: 1;
   }

   li {
      display: flex;
      gap: 1rem;
      align-items: center;
      color: #777;
      padding: 12px;
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

const LogoutBtn = styled.button`
      position: absolute;
      bottom: 5px;
      display: flex;
      gap: 1rem;
      color: #777;
      background: none;
      border: none;
      padding: 12px;
      cursor: pointer;
      border-radius: 7px;
      transition: 200ms;
      font-weight: 450;

      &:hover {
      background: ${props => props.theme.secondary};
      color: #FFFFFF;
      filter: drop-shadow(0 10px 1rem rgba(55, 124, 247, 0.78));
      }
`
export {
   SideBarContainer,
   NavigationLinks,
   LogoutBtn
}