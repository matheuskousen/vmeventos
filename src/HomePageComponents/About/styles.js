import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding-top: 7em;

  .row {
    width: 85%;
    max-width: 85em;

    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 900px) {
      display: block;
    }

    .col-left {
      font-size: 2em;
      .section-title {
        color: var(--darklight);
        text-align: left;
        line-height: 1;

        @media (max-width: 900px) {
          text-align: left;
        }
      }

      @media (max-width: 900px) {
        font-size: 1em;
      }
    }

    .col-right {
      display: flex;

      align-items: flex-end;
      padding: 1em 5em;
      @media (max-width: 900px) {
        padding: 0em;
      }
      grid-column: 2 / 3;
      grid-row: 2/ 2;
      flex-direction: column;

      p {
        margin-bottom: 2em;

        text-align: justify;
      }

      font-size: 1.5em;
    }
  }
`;
