import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { InteractivePage } from "../Pages/Interactive";
import { Primary } from "../Pages/Primary";

export const routes = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [{
        path:"*",
        element: <h1 style={{color:'white'}}>Sowwy</h1>    
    }, {
        path: "/",
        element: <Primary/>
    }, {
        path: "/interactive",
        element: <InteractivePage/>
    }]
}])