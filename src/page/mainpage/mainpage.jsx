import { Layout } from 'antd';
import MenuHeader from '../MenuHeader/MenuHeader.jsx';
import { Outlet } from 'react-router-dom';

const Mainpage= () => {
    return(
        <div>
            <Layout>
                <div style={{position: "fixed",top: 0,width: "100%",zIndex: 1}}>
                    <MenuHeader></MenuHeader>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Mainpage;