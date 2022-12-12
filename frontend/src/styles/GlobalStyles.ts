import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     :root {
          --light-cyan: #DDFFF7; //color button
          --vivid-tangerine: #ffa69e; //background color
          --irresistible: #aa4465; //general text
          --russian-violet: #462255; // background color button
          --middle-blue-green: #93e1d8; // general text 2 
          --white: #ffffff; //white
          --slate-gray: #628395; //placeholder
          background-color: var(--vivid-tangerine);
     }

     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }
`