import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
export function ImageGallery({ images }) {
  return (
    <List>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} src={webformatURL} />
      ))}
    </List>
  );
}
