import React, {useState} from 'react';
import { Avatar, Image } from 'antd';

const AvatarView = ({url,size}:any)=>{
    return (
        <div className='avatar'>
            <Avatar  size={size} src={<Image className="imgde" src={url} />} />
        </div>
    )
}

export default AvatarView;