import fs from "fs";
import { data_dir } from "./constants.ts";

export interface Word {
  name: string,
  keys: string[]
}

export default class Words {
  static create = (word: Word): void => {

    const dataWords = JSON.parse(
      fs.readFileSync(data_dir + '/words.json', 'utf-8')
    )

    const newWords = [...dataWords, word];

    fs.writeFileSync(data_dir + '/' + 'words.json', JSON.stringify(newWords))

  }

  static getAll = (): Word[] => {
    return JSON.parse(
      fs.readFileSync(data_dir + '/words.json', 'utf-8')
    )

  }
}
