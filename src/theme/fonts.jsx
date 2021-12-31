import { Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={`
      /* latin */
      @font-face {
        font-family: 'Ilyas';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url('/assets/Ilyas.otf') format('OpenType');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }  
       /* latin */
      @font-face {
        font-family: 'Amarante-Regular';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url('/assets/Amarante-Regular.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }  
      `}
	/>
);

export default Fonts;
