import { Layout } from 'antd'
import MenuHeader from '../MenuHeader/MenuHeader.jsx'
import Balance from '../Balance/Balance.jsx'
import {useLocation} from 'react-router-dom'

const Mainpage= () =>{
    const location = useLocation();
    return(
        <div>
            <Layout>
                <div style={{position: "fixed",top: 0,width: "100%",zIndex: 1,}}>
                    <MenuHeader></MenuHeader>
                    <div>
                        {location.pathname == "/"&& <Balance/>}
                        {location.pathname == "/Balance"&& <Balance/>}
                    </div>
                </div>
            </Layout>
        </div>
        
    )
}
export default Mainpage;