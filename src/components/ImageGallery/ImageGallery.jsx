import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function ImageGallery({ images, toggleIsOpen }) {
  return (
    <List>
      {images.map(({ webformatURL }, index) => (
        <ImageGalleryItem
          key={index}
          src={webformatURL}
          toggleIsOpen={() => toggleIsOpen(index)}
        />
      ))}
    </List>
  );
}
