import './MenuHeader.css';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';
import {GithubOutlined,TwitterOutlined} from "@ant-design/icons";

const MenuHeader = () => {
  return(
    <div className="menu-container">
      <Menu className='Menu'  theme="dark" mode="horizontal" >
      <Menu.Item key="toBalance"><Link to="/Balance">Balance</Link></Menu.Item>
      <Menu.Item key="toGasCex"><Link to="/GasCex">GasCex</Link></Menu.Item>
      <Menu.Item key="twitter" className='twitter'><a href='https://twitter.com/adolyb2' target="_blank" rel="noopener noreferrer"><TwitterOutlined></TwitterOutlined></a></Menu.Item>
      <Menu.Item key="github" className='github'><a href='https://github.com/adolyb' target="_blank" rel="noopener noreferrer"><GithubOutlined></GithubOutlined></a></Menu.Item>
      </Menu>
    </div>
  )
}

export default MenuHeader;
