export interface FetchedImageObj{
  data: Img;
}

export interface Img {
  thumbnail: string;
  title: string;
  hidden: boolean;
  }


export function getImages(): Promise<Img[]> {
  return fetch("http://www.reddit.com/r/pics/.json")
    .then(res => res.json())
    .then((reddit) => {
      return reddit.data.children.reduce((acc: Img[], imageObj: FetchedImageObj) => {
        if (imageObj && imageObj.data) {
          acc.push({
            thumbnail : imageObj.data?.thumbnail,
            title: imageObj.data?.title || "",
            hidden : false,
          })
        }
        return acc;
      }, [])})
}