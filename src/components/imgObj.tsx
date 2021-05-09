import {useState} from 'react';
import { ImageViewer} from 'wix-style-react';


type imgObjProps = {
  id: string;
  hidden: boolean;
  setHidden(imageId: string, isHidden: boolean): void;
  thumbnail: string;
}

const ImgObj = function(props : imgObjProps){
  const [hidden, setHidden] = useState(props.hidden);

  function hideHandler(){
    setHidden(!hidden);
    props.setHidden(props.id, !hidden);
  }

  return (
    <ImageViewer width={300} height={200} showUpdateButton={false} onRemoveImage={hideHandler} imageUrl={props.thumbnail} />
  )
};


export default ImgObj;