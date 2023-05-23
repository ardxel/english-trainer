import {CSSObject} from "../../models/css_object.ts";

const mainPageStyles: CSSObject = {
  main: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    padding: '20px'
  },
  btn: {
    padding: '5px'
  },
  playground: {
    display: 'flex',
    columnGap: '5px',
    marginTop: '10px'
  }
}

export default mainPageStyles;
