import { Component } from 'react';
import {
  SearchbarEl,
  SearchbarInput,
  SerchbarButton,
} from './Searchbar.styled';

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
          <SerchbarButton type="submit">
            <span>Search</span>
          </SerchbarButton>

          <SearchbarInput
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
