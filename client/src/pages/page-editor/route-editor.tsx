import PageEditor from "./PageEditor.tsx";
import {RouteObject} from "react-router-dom";

const editor: RouteObject = {
    path: '/edit',
    element: <PageEditor/>
}

export default editor;