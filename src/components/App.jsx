import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'services/images-api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query && query !== '') {
      this.setState({ isLoading: true });

      getImages(query, page)
        .then(({ data: { hits } }) => {
          if (hits) {
            this.setState(prevState => ({
              images: [...prevState.images, ...hits],
            }));
          }
        })
        .catch(error => console.log(error.message))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
  onSubmit = query => {
    this.setState({ query });
  };
  render() {
    const { query, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {query !== '' && <ImageGallery images={images} />}
      </>
    );
  }
}
