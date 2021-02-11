import React,{useState} from 'react';
import {Avatar,Comment,Content} from '../views';
import { Typography } from 'antd';

const { Title } = Typography;

const ContactMe = ({disabled}:any)=>{
    const [info,setInfo] = useState({});
    const des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return(
        <>
        {
            disabled?(
                <>
                    <Avatar url={"https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"} 
                    size={200} />
                    <h3 className="title-name" >Andy Martinez</h3>
                </>
            ):(<>
                <Avatar url={"https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"} 
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
                        <Comment css="user-descripcion" descricion={des}/>
                    }

                />
            </>
         ): null}
            
        </>
    );
    
};
export default ContactMe;