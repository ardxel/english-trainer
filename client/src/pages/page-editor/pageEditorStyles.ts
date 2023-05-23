import {CSSObject} from "../../models/css_object.ts";

const pageEditorStyles: CSSObject = {
  main: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  inputWord: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '18px'
  },
  translateBox: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    rowGap: '10px'
  },
  addKey: {
    input: {
      padding: '5px',
    },
    button: {
      padding: '5px'
    },
  },
  translateContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  translateItem: {
    marginTop: '15px',
    border: '1px solid black',
    borderRadius: '4px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  submit: {
    padding: '5px',
    marginTop: '10px'
  }
}

export default pageEditorStyles;
