import { Item, Img } from './ImageGalleryItem.styled';
export function ImageGalleryItem({ src, alt }) {
  return (
    <Item>
      <Img src={src} alt={alt} />
    </Item>
  );
}
