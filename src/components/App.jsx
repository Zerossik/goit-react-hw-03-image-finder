import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'services/images-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.setState({ images: [], page: 1 });
    }
    if (
      (prevState.query !== query || prevState.page !== page) &&
      query !== ''
    ) {
      this.setState({
        isLoading: true,
      });

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
  handlerPageClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { query, images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {query !== '' && (
          <>
            <ImageGallery images={images} />
            <Button text={'Load more'} onClick={this.handlerPageClick} />
          </>
        )}
      </div>
    );
  }
}
