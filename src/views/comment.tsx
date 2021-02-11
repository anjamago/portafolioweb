import React from 'react';


const Comment = ({descricion,css}:any)=>{
    const cssProperti= `descripcion ${css}`;
    
    return (
        <>
            <p className={cssProperti} >{descricion}</p>
        </>
    );
}

export default Comment;