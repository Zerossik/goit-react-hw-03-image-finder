import { Component } from 'react';
import { SearchbarEl } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };
  handlerChange = evt => {
    this.setState({
      inputValue: evt.target.value,
    });
  };
  handlerSubmit = evt => {
    const { onSubmit } = this.props;
    const { inputValue } = this.state;
    evt.preventDefault();
    onSubmit(inputValue.trim());
    this.resetInput();
  };
  resetInput = () => {
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <SearchbarEl onSubmit={this.handlerSubmit}>
        <form>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handlerChange}
            value={this.state.inputValue}
          />
        </form>
      </SearchbarEl>
    );
  }
}
