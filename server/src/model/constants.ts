import {fileURLToPath} from "url";
import path from "path";

export const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const data_dir = path.resolve(__dirname, '../../../data');
