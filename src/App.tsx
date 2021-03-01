import React, { useState } from 'react';
import {Layout}  from 'antd'; 
import ContactMe from './components/contact-me';
import './assets/main.css';
import Profile from './components/profile';
import { DATA_INFO } from './components/data';


const {  Content, Sider } = Layout;




const App = ()=>  {
  const [collapsed,setCollapsed] =  useState(false);
  const onCollapse = (collapsed:boolean) => setCollapsed(collapsed);

  const educacion =  DATA_INFO.profiles.filter((f:any)=>f.seccion === "Educacion")
  const experiencia =  DATA_INFO.profiles.filter((f:any)=>f.seccion === "Experiencia Laboral")

  return (
  <Layout style={{ minHeight: '100vh' }}>

      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width={300} >
        <ContactMe disabled={!collapsed}/>
      </Sider>

    <Layout className="site-layout">
      <Content style={{ padding: '0 10px' }}>
      
        <div className="site-layout-content">
        
           
       {
         DATA_INFO.profiles.map(m=> <Profile 
          data={m}
         />)
       }

        </div>
      </Content>
    </Layout>
  </Layout>
);}


export default App;
