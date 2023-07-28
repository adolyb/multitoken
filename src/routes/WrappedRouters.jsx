import Mainpage from '../page/mainpage/mainpage.jsx';
import { useRoutes, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spin } from 'antd';
const Balance = React.lazy(() => import('../page/Balance/Balance'));
const GasCex = React.lazy(() => import('../page/GasCex/GasCex'));

const router = [
    {
        path:"/",
        element:<Mainpage/>,
        children:[
            {
                index: true, 
                element: <Navigate to="/Balance" />
            },
            {
                path:"Balance", 
                element:<Balance/>
            },
            {
                path:"GasCex", 
                element:<GasCex/>
            },
            {path: "*", element: <Navigate to="Balance" />} 
        ]
    },
    {path: "*", element: <Navigate to="/"/>}
];

const WrappedRouters = () => {
    let result = useRoutes(router);
    return(
        <Suspense fallback={<div><Spin/></div>}>
            {result}
        </Suspense>
    )
}

export default WrappedRouters;