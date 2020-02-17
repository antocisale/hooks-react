import React,{useState} from 'react';

const useSwitchBoolean = (initialValue=false)=>{
    const [boolean,setBoolean]= useState(initialValue);

    const toggleValue = () => setBoolean(!boolean)


    return [boolean, toggleValue];

};

export default useSwitchBoolean;