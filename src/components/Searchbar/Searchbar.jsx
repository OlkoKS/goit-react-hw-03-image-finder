import { Component } from 'react';

const INITIAL_STATE = {
  value: '',
};

export class Searchbar extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
