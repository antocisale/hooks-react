import React from 'react';

const Checkbox = props =>{
    return(
        <div>
        <input type="checkbox" onChange={props.action}/>
        <input type="text" disabled={props.allow} />
        </div>
    )
}


export default Checkbox;