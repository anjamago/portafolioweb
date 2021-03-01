import React from 'react';

interface IProps{
    description: string | Array<any>,
    css:string
}
const Comment = ({description,css}:IProps)=>{
    const cssProperti= `descripcion ${css}`;
    
    return (
        <>
            {
                typeof description === "object" 
                    ?(<p className={cssProperti} > { description.map((f:any)=><span style={{display:"block"}}>{f.tag}  </span>)}</p>)
                    :(<p className={cssProperti} >{description}</p>)
            }
           
        </>
    );
}

export default Comment;