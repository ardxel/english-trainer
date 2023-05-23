import main from "./page-main/route-main.tsx";
import editor from "./page-editor/route-editor.tsx";
import {RouteObject} from "react-router-dom";

const routes: RouteObject[] = [main, editor];

export default routes;