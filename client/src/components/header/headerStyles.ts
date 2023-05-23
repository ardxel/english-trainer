import {CSSObject} from "../../models/css_object.ts";

const headerStyles: CSSObject = {
  header: {
    width: '100%',
    maxWidth: '1280px',
    height: '50px',
    border: '2px solid black'
  },
  list: {
    width: '100%',
    height: '100%',
    listStyle: 'none',
    display: 'flex',
    marginLeft: '20px',
    fontSize: '20px',
    alignItems: 'center',
    columnGap: '20px'
  },
  link: {
    all: 'unset',
    cursor: 'pointer'
  }
}

export default headerStyles;
