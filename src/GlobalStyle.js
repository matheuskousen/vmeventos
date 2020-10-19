import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Box sizing rules */

@font-face {
  font-family:"north" ;
  src: url("/assets/fonte/north.otf") format('woff2');
}


@font-face {
  font-family:"assc" ;
  src: url("/assets/fonte/assc.ttf") format('woff2');
}


@font-face {
  font-family:"geo" ;
  src: url("/assets/fonte/geo.ttf") format('woff2');
}

@font-face {
  font-family:"flo" ;
  src: url("/assets/fonte/serif.woff2") format('woff2');
}



:root{
  --green:#BCD97E;
  --green2:#C0D98B;
  --green3:#CAD9A9;
  
  --gray:#D9D9D2;
  --white:#EBF2DC;
  --dark:#010101;
  --darklight:#595959;
/* fontes */

--poppins:'Poppins', sans-serif;
--north:"north";
--assc:"assc";
--geo:"geo";
--flo:"flo";

--logo:'Rajdhani', sans-serif;
--titles:'Crimson Text', serif;
--texts:'Saira Extra Condensed', sans-serif;
/* font-family: 'Crimson Text', serif;
font-family: 'Rajdhani', sans-serif;
font-family: 'Saira Extra Condensed', sans-serif; */
}








*,
*::before,
*::after {
  box-sizing: border-box;
  padding:0;
  margin:0;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul
ul[class],
ol[class],
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  background:var(--white) ;
font-family:var(--texts) !important;
  font-weight:400;
  
  /* line-height: 1.5; */
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}


.section-title {
    color: var(--green);

    font-size: 4em;
    font-family: var(--north);
    font-weight: 700;

    text-align: center;
    margin-bottom: 3rem;
  }

/* A elements that don't have a class get default styles */

a{
  text-decoration:none;
transition-property:color;
transition-duration:1s;
  &:hover {
          color: var(--darklight) !important;
        }
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}


.divisor{
  height:1px;
  width:100%;
  max-width:100%;
  margin:1em auto;

  background:var(--dark);
}


.sub-title{
  text-align:center;
  
}
h1,h2,h3,h4,h5,h6{
  font-family:var(--assc);
}





/* SLideshow */
/* ------------------------------------ */
.glide {
  position: relative;
  width: 100%;
  margin:0 auto;
    max-width:65em;
  box-sizing: border-box; }
  .glide * {
    box-sizing: inherit; }
  .glide__track {
    overflow: hidden; }
  .glide__slides {
    position: relative;
    width: 85%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    
    will-change: transform; }
    .glide__slides--dragging {
      user-select: none; }
  .glide__slide {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent; 
    font-size:2em;
  }
    
    .glide__slide a {
      user-select: none;
      -webkit-user-drag: none;

      -moz-user-select: none;
      -ms-user-select: none; }
  .glide__arrows {
    -webkit-touch-callout: none;
    user-select: none; }
  .glide__bullets {
    -webkit-touch-callout: none;
    user-select: none; }
  .glide--rtl {
    direction: rtl; }
`;
