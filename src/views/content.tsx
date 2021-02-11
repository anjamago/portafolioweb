import React from 'react';
import Icontent from '../interfaces/Icontent';

const Content=({ title, icon, childre }: Icontent)=> {
    return (
        <div className="card" style={{color:'#fff'}}>
            <>
                {icon}
                {title}
            </>
            {childre}
        </div>
    );
};

export default Content;