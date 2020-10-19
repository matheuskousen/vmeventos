import styled from "styled-components";

export const Container = styled.div`
  padding-top: 7em;
  @media (max-width: 900px) {
    padding-top: 0em;
  }
  .row {
    width: 85%;

    max-width: 65em;

    margin: 0 auto;
    .section-title {
      color: var(--darklight);
    }

    .sub-title {
      font-size: 1.6em;
      text-align: center;
      padding: 0 10em;

      @media (max-width: 900px) {
        padding: 0 2em;
      }
    }

    .contact-ways {
      margin: 5em 0;

      display: flex;
      justify-content: space-evenly;
      @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2.5em;
      }
      font-size: 1.4em;
      .phone,
      .email {
        text-transform: uppercase;
      }
    }
  }
`;
