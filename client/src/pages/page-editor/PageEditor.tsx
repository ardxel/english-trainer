import styles from "./pageEditorStyles.ts";
import {ChangeEvent, useReducer} from "react";
import axios from "axios";
import BASE_URL from "../../constants/base_url.ts";

type PageEditorState = {
  word: string,
  tempKey: string | undefined,
  translateKeys: string[]
}

type ActionKind = 'input_word' | 'add_key' | 'input_temp_key' | 'remove_key'

type Action = {
  type: ActionKind,
  payload: string
}

const PageEditor = () => {
  ////////////////
  // REDUCER
  ////////////////
  const [state, dispatch] = useReducer((state: PageEditorState, action: Action) => {
    const {type, payload} = action;

    if (type === 'input_word') {
      return {
        ...state, word: payload as string
      }
    }

    if (type === 'input_temp_key') {
      return {
        ...state, tempKey: payload as string
      }
    }

    if (type === 'add_key') {
      if (state.tempKey) {
        return {
          ...state,
          translateKeys: [...state.translateKeys, state.tempKey as string],
          tempKey: undefined
        }
      }
    }

    if (type === 'remove_key') {
      return {
        ...state,
        translateKeys: state.translateKeys.filter(key => key !== payload)
      }
    }

    return state

  }, {word: '', translateKeys: [], tempKey: undefined})
  ////////////////
  // CONSTANTS
  ////////////////

  const displaySubmit = Boolean(state.word && state.translateKeys.length)

  ////////////////
  // HANDLERS
  ////////////////
  const handleInputWord = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'input_word', payload: e.target.value})
  }

  const handleChangeTempKey = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'input_temp_key', payload: e.target.value})
  }

  const handleAddTranslateKey = () => {
    dispatch({type: 'add_key', payload: state.tempKey as string})
  }

  const handleDeleteTranslateKey = (key: string) => {
    dispatch({type: 'remove_key', payload: key})
  }

  const handleSubmit = async () => {
    const body = {
      name: state.word,
      keys: state.translateKeys
    }

    const response = await axios.post(`${BASE_URL}/addWord`, body)

    const { status } = await response.data();

    console.log(status);
  }

  return (
    <div style={styles.main}>
      <h1>Enter english word</h1>
      {/* translate word input */}
      <input style={styles.inputWord} type='text' placeholder='potato' onChange={handleInputWord}/>
      {displaySubmit && <button style={styles.submit} onClick={handleSubmit}>Send</button>}
      <div style={styles.translateBox}>
        <h3>Enter translate words</h3>
        <div>
          <input type='text' style={{padding: '5px'}} value={state.tempKey || ''} onChange={handleChangeTempKey}/>
          <button style={{padding: '5px', width: '30px'}} onClick={handleAddTranslateKey}>+</button>
        </div>
        <div style={styles.translateContainer}>
          {state.translateKeys && state.translateKeys.map((item, index) => {
            return (
              <div style={styles.translateItem} key={index}>
                <span style={{padding: '5px'}}>{item}</span>
                <button style={{padding: '3px 10px'}} onClick={handleDeleteTranslateKey.bind(null, item)}>-</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PageEditor;
