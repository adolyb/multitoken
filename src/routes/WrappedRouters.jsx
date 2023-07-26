import Mainpage from '../page/mainpage/mainpage.jsx'
import {useRoutes,Navigate} from 'react-router-dom'
import React,{ Suspense } from 'react';
const Balance = React.lazy(() => import('../page/Balance/Balance'));

const router = [
    {
        path:"/",element:<Mainpage/>,
        children:[
            {
                path:"/Balance",
                element:<Balance/>
            }
        ]
    },
    {path: "*", element: <Navigate to="/"/>}
]


const WrappedRouters = () =>{
    let result = useRoutes(router)
    return(
        <Suspense fallback={<div>Loading...</div>}>
            {result}
        </Suspense>
    )
}

export default WrappedRouters;