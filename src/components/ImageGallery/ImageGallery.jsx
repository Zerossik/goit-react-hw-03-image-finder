import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export function ImageGallery({ images }) {
  console.log(images);
  return (
    <List>
      {images.map(({ webformatURL }, index) => (
        <ImageGalleryItem key={index} src={webformatURL} />
      ))}
    </List>
  );
}
