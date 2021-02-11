import React, { useState } from 'react';
import {Layout}  from 'antd'; 
import ContactMe from './components/contact-me';
import './assets/main.css';

const {  Content, Sider } = Layout;




const App = ()=>  {
  const [collapsed,setCollapsed] =  useState(false);
  const onCollapse = (collapsed:boolean) => setCollapsed(collapsed);


  return (
  <Layout style={{ minHeight: '100vh' }}>

      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width={300} >
        <ContactMe disabled={!collapsed}/>
      </Sider>

    <Layout className="site-layout">
      <Content style={{ padding: '0 10px' }}>
      
        <div className="site-layout-content">Content</div>
      </Content>
    </Layout>
  </Layout>
);}


export default App;
