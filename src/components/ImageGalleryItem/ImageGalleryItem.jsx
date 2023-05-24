import { Item, Img } from './ImageGalleryItem.styled';
export function ImageGalleryItem({ src, toggleIsOpen }) {
  return (
    <Item onClick={toggleIsOpen}>
      <Img src={src} alt="IMG" />
    </Item>
  );
}
