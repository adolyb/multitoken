import './MenuHeader.css';
import {Menu} from 'antd';
import {GithubOutlined,TwitterOutlined} from "@ant-design/icons";

const MenuHeader = () => {
  return(
    <div className="menu-container">
      <Menu className='Menu'  theme="dark" mode="horizontal" >
      <Menu.Item key="1">MainPage</Menu.Item>
      <Menu.Item key="twitter" className='twitter'><a href='' target="_blank" rel="noopener noreferrer"><TwitterOutlined></TwitterOutlined></a></Menu.Item>
      <Menu.Item key="github" className='github'><a href='' target="_blank" rel="noopener noreferrer"><GithubOutlined></GithubOutlined></a></Menu.Item>
      </Menu>
    </div>
  )
}

export default MenuHeader;

