import React,{useState} from 'react';
import {Avatar,Comment,Content} from '../views';
import {DATA_INFO} from './data';

const ContactMe = ({disabled}:any)=>{
    const [info,setInfo] = useState({...DATA_INFO});
   
    
    return(
        <>
        {
            disabled?(
                <>
                    <Avatar url={info.url} 
                    size={200} />
                    <h3 className="title-name" >Andy Martinez</h3>
                </>
            ):(<>
                <Avatar url={info.url} 
                size={40} />
                <h3 className="title-name" style={{fontSize:14}} >Andy Martinez</h3>
            </>)
        }
        {disabled ?(
            <>
                <Content
                    title="Perfil"
                    icon={<i className="fab fa-alipay"></i>}
                    childre={
                        <Comment css="user-descripcion" description={info.descripcion}/>
                    }
                />
                 <Content
                    title="Perfil"
                    icon={<i className="fab fa-alipay"></i>}
                    childre={
                        <Comment css="user-descripcion" description={info.contactme}/>
                    }
                />
            </>
         ): null}
            
        </>
    );
    
};
export default ContactMe;