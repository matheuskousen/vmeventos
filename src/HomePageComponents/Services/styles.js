import styled from "styled-components";

export const Content = styled.section`
  position: relative;
  padding-top: 7em;

  @media (max-width: 900px) {
    padding-top: 4em;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 85rem;

  margin: 0 auto;
  .sub-title {
    font-size: 1.8em;
    letter-spacing: 5px;
    margin-left: 0.8em;
    font-family: var(--texts);
    text-align: left;
  }
  .split {
    display: grid;

    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(150px, 1fr);
    .split__item {
      display: flex;
      flex-direction: column;

      &:nth-child(1) {
        grid-column: 1/2;
        padding: 20px;
        grid-row: 1/1;
      }

      &:nth-child(2) {
        grid-column: 2/4;

        grid-row: 1/3;
        padding: 20px;
      }

      &:nth-child(3) {
        grid-column: 4/7;
        padding: 20px;
        grid-row: 1/4;
      }

      img {
        object-fit: cover;
        width: 100%;
      }
      .split__i {
        padding: 0.5em 0;
        font-size: 1.8em;

        text-align: center;
        font-family: var(--texts);
        font-weight: 700;

        color: var(--darklight);

        p {
          text-align: left;
        }
      }
    }
  }

  @media (max-width: 900px) {
    .split {
      display: block;

      padding: 0em;
      margin: 0em 0;

      .split__item {
        margin: 0;
        margin: 0em 0;
        padding: 0;
      }
    }
  }
`;
