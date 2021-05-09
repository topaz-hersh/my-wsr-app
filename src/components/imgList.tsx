import ImgObj from './imgObj';
import type {Img} from '../Data/fetchAPI';
import './imgList.st.css'

type imgListProps = {
  images: Img[];
  setHidden(imageId: string, isHidden: boolean): void;
}

const ImgList = function(props : imgListProps){
  const img_array = props.images.filter((image) => !image.hidden);

  return(
    <ul>
      {img_array.map((img) =>{
        return (
          <li key={img.thumbnail}>
            <ImgObj
              id={img.thumbnail}
              setHidden={props.setHidden}
              thumbnail={img.thumbnail}
              hidden={img.hidden}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default ImgList;

