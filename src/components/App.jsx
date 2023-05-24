import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'services/images-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Spiner } from './Loader/Loader';
import style from './style.module.css';

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

      setTimeout(() => {
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
      }, 1000);
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
    const { images, isLoading } = this.state;
    return (
      <div className={style.wrap}>
        <Searchbar onSubmit={this.onSubmit} />
        <Spiner isLoading={isLoading} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
            <div>
              {<Spiner isLoading={true} />}
              <Button text={'Load more'} onClick={this.handlerPageClick} />
            </div>
          </>
        )}
      </div>
    );
  }
}
