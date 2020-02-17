import React,{useState} from 'react';
import Images from './Components/Image';
import Checkbox from './Components/Checkbox';
import useSwitchBoolean from './Hooks/switchBoolean';
import img1 from './Img/img1.jpg';
import img2 from './Img/img2.jpg'
import img3 from './Img/img3.jpg'
import img4 from './Img/img4.jpg'
import img5 from './Img/img5.jpg'


function App() {
  const images = [img3,img1,img2,img4,img5];
  const [index,setIndex] =useState(0)
  const [pic,togglePic] = useSwitchBoolean(false);
  const [visible,setVisible] = useState("hidden")
  const [allowWrite,toggleAllowWrite] = useSwitchBoolean(false);

  const showPic=()=>{
    togglePic();

    if (pic){
      setVisible("visible");
      if(index +1 ==images.length){
        setIndex(0)
      }
      else{
        setIndex(index+1);
      }
    }else{
      setVisible("hidden");
    }
  }

  return (
    <div>
      <Images action={showPic} pic={visible} img={images[index]}></Images>
      <Checkbox action={toggleAllowWrite} allow={allowWrite}></Checkbox>
    </div>
  );
}

export default App;
