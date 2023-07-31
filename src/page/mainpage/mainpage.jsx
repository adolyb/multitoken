import { Layout } from 'antd';
import MenuHeader from '../MenuHeader/MenuHeader.jsx';
import { Outlet } from 'react-router-dom';

const Mainpage = () => {
    return (
        <Layout>
            <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1, maxWidth: '100%', overflowX: 'auto', overflowY: 'auto' }}>
                <MenuHeader></MenuHeader>
            </div>
            <div style={{ paddingTop: '5vh', overflow: 'auto', height: '100vh',backgroundColor:"white" }}>
                <Outlet />
            </div>
        </Layout>
    );
}

export default Mainpage;