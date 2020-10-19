import styled from "styled-components";

export const Hero = styled.header`
  background: var(--dark);

  height: 800px;
  background-size: cover;

  position: relative;

  .seo {
    background: url(/assets/images/seo.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    width: 800px;
    position: absolute;
    top: 0;
    opacity: 0.6;
    bottom: 0;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .mds {
    position: absolute;
    right: 0;
    top: 50%;

    transform: translateY(-50%);
    @media (max-width: 900px) {
      left: 0;
    }

    > a,
    span {
      color: var(--white);
      position: relative;

      writing-mode: vertical-rl;
      display: flex;
      font-family: var(--north);
      font-size: 24px;

      letter-spacing: 5px;
      text-decoration: none;
      margin: 0em 1em 1em 0.5em;
      text-transform: uppercase;

      font-weight: 700;
    }
  }

  .container {
    position: absolute;

    border: 0px solid var(--green);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 500px;
    border-radius: 50%;

    z-index: 1;
    left: 70%;
    top: 50%;

    transform: translate(-50%, -50%);

    margin: 0 auto;

    text-align: center;

    @media (max-width: 900px) {
      left: 50%;
      top: 70%;

      width: 300px;
      height: 300px;
    }

    h1 {
      font-size: 4em;
      font-size: clamp(3rem, calc(5vw + 1rem), 4.5rem);

      color: var(--green);
      font-family: var(--texts);
      line-height: 0.95em;

      @media (min-width: 900px) {
        font-size: 10em;
      }
    }

    h1.p-2 {
      font-size: 8em;
      font-size: clamp(12rem, calc(5vw + 1rem), 8.5rem);

      @media (min-width: 900px) {
        font-size: 22em;
      }
    }

    p {
      color: var(--green2);
      font-size: 1.9em;
      text-transform: uppercase;
      margin-top: 1rem;
      font-family: var(--texts);
    }
  }
`;
