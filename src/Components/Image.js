import React,{useState} from 'react';


const Images = ({action, pic,img})=>{

    return(
        <div>
            <div style={{visibility: pic}}>
                <img src={img} alt="img"/>
            </div>
            <button onClick={action}>Show me!</button>

        </div>
)

}


export default Images;