import styled from "styled-components";

export const Content = styled.section`
  padding-left: 8em;
  padding-right: 8em;
  padding-bottom: 5em;
  @media (max-width: 900px) {
    /* padding: 0em; */

    padding-left: 2em;
    padding-right: 2em;
    padding-top: 5em;
  }
`;

export const Container = styled.div`
  .sub-title {
    text-align: left;
    font-size: 1.4rem;
  }
  .section-title {
    padding: 0em 0;
    margin: 0;
    text-align: left;
    letter-spacing: 3px;
    color: var(--dark);
  }
  .split_grid {
    display: grid;
    margin-top: 2em;

    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(auto, 150px);
    @media (max-width: 900px) {
      display: block;
    }
    .item__1 {
      grid-column: 1/3;
      grid-row: 1 /5;
    }

    .item__2 {
      grid-column: 3/5;
      grid-row: 1 / 4;
    }

    .item__3 {
      grid-column: 5/7;
      grid-row: 1/5;
    }

    .grid_items {
      display: flex;
      padding: 20px;
      justify-content: space-between;
      flex-direction: column;
      .infomations {
        padding: 2em 0;

        .recent-infomation__text,
        .recent-titles {
          text-transform: uppercase;
          padding-left: 0.2em;
        }
        .recent-titles {
          font-family: var(--north);
          font-size: 1em;
        }

        .recent-infomation__text {
          font-family: var(--titles);
          font-size: 1.8em;
          font-weight: 300;
          margin-top: 0.5em;
        }
      }

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }
  }
`;
