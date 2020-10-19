import styled from "styled-components";

export const Container = styled.div`
  padding-top: 7em;
  .sub-title {
    font-size: 24px;

    text-transform: uppercase;
  }
  .row {
    display: grid;
    position: relative;

    grid-template-columns: repeat(6, 1fr);
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .btn-follow {
      position: absolute;
      top: 50%;
      left: 50%;
      background: var(--white);

      padding: 1em 3em;
      font-size: 18px;
      text-decoration: none;
      color: var(--darklight);

      transform: translate(-50%, -50%);
      font-family: var(--poppins);

      @media (max-width: 900px) {
        top: 45%;
        left: 50%;
      }
    }

    @media (max-width: 900px) {
      .image__3 {
        display: none !important;
      }

      .image__4 {
        display: none !important;
      }
    }
    .image__items {
      display: flex;
      padding: 2em 0;

      @media (max-width: 900px) {
        padding: 0.2em;
      }
      img {
        object-fit: cover;
      }
    }
  }
`;
