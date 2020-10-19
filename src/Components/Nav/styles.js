import styled from "styled-components";

export const Container = styled.nav`
  position: absolute;
  top: 0;
  z-index: 1689;
  right: 0;
  display: none;
  .navbar {
    .nav-item {
      display: inline-block;

      padding: 2em 1.5rem;
      .nav-link {
        color: var(--white);
        font-family: var(--north);
        text-decoration: none;
        font-weight: 700;
        font-size: 1.4em;
        letter-spacing: 0.25em;

        &:hover {
          color: var(--darklight);
        }
      }
    }
  }
`;
