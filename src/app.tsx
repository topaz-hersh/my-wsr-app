import type React from 'react';
import {useState, useEffect} from 'react';
import { st, classes } from './app.st.css';
import { Header } from './header';
import { getImages, Img } from './Data/fetchAPI';
import ImgList from './components/imgList';
import {Button} from 'wix-style-react';

export interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
  const [images, setImages] = useState<Img[]>([]);
  useEffect(() => {
    getImages().then((fetchedImages: Img[]) => {
      setImages(fetchedImages);
    })
  }, [])


  const setHiddenImage = (imageId: string) => {
    setImages(images.map(image => {
      if (image.thumbnail === imageId){
        image.hidden = !image.hidden;
      }
      return image;
    }))
  }

  const unHideAll = () => {
    setImages((images.map(image => {
      image.hidden = false;
    return image;
    })))
  }


  return (
        <main className={st(classes.root, className)}>
          <Button skin="light"  onClick={unHideAll}>Reload Gallery</Button>
            <Header className={classes.header} />
            <ImgList images={images} setHidden={setHiddenImage}/>
        </main>
    );
};
