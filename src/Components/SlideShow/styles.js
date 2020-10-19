import styled, { keyframes } from "styled-components";

const isopacity = keyframes`

from{
  opacity:0;
}

to{
  opacity:1;
}
`;

export const Container = styled.div`
  padding-top: 7em;
  .section-title {
    color: var(--dark);
  }
  .sub-title {
    font-size: 1.6em;
  }
  .slideshow {
    width: 85%;
    max-width: 65em;
    margin-left: auto;
    margin-right: auto;

    .slide-holder {
      .slide.effect {
        opacity: 1;
      }

      .slide {
        opacity: ${({ isOpacity }) => (isOpacity ? 1 : 0)};
        blockquote {
          height: 400px;
          display: flex;
          align-items: flex-start;
          flex-direction: column;

          justify-content: center;

          animation-delay: 200s;
          p {
            font-size: 1.6em;

            transition: 1s;
            text-align: center;
          }

          footer {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            p {
              text-align: center;
              margin-left: 1em;
            }
            padding: 2em 0;
          }
        }
      }
    }

    position: relative;
    .slideshow-controller {
      position: absolute;
      top: 75%;
      left: 50%;
      margin-top: 2em;
      margin-left: 1em;
      transform: translate(-50%, -50%);
      font-size: 1.6em;

      span {
        margin: 0em 1em;

        cursor: pointer;

        text-transform: uppercase;
      }
    }
  }
`;
