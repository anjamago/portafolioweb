import React,{useState} from 'react';
import {Avatar,Comment,Content} from '../views';
import { Typography } from 'antd';

const { Title } = Typography;

const ContactMe = ({disabled}:any)=>{
    const [info,setInfo] = useState({});
    const url = "https://scontent.fsjo5-1.fna.fbcdn.net/v/t1.0-9/46524166_2196273413758293_7840645717210169344_o.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_ohc=bsoS4yhEDp0AX8BcJEy&_nc_ht=scontent.fsjo5-1.fna&oh=f014b666064f5170fb74a485fdb23973&oe=604BDF38";
    const des = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return(
        <>
        {
            disabled?(
                <>
                    <Avatar url={url} 
                    size={200} />
                    <h3 className="title-name" >Andy Martinez</h3>
                </>
            ):(<>
                <Avatar url={url} 
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