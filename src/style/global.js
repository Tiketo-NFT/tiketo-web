import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'
import Helvetica from '../assets/font/Helvetica.ttf';
import HelveticaLight from '../assets/font/HelveticaLight.ttf';
import HelveticaBold from '../assets/font/HelveticaBold.ttf';

export const Global = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: "Helvetica";
        src: local("Helvetica"),
        url(${Helvetica}) format('truetype');
        font-weight: normal;
        unicode-range: U+0041-005A, U+0061-007A;
    }

    @font-face {
        font-family: 'HelveticaLight';
        src: local("HelvaticaLight"),
        url(${HelveticaLight}) format('truetype');
        font-weight: lighter;
        unicode-range: U+0041-005A, U+0061-007A;
    }
    @font-face {
        font-family: 'HelveticaBold';
        src: local("HelvaticaBold"),
        url(${HelveticaBold}) format('truetype');
        font-weight: bold;
        unicode-range: U+0041-005A, U+0061-007A;
    }
`;

export default Global;