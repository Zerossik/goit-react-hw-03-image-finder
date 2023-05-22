import { Item } from './ImageGalleryItem.styled';
export function ImageGalleryItem({ src, alt }) {
  return (
    <Item>
      <img src={src} alt={alt} />
    </Item>
  );
}
