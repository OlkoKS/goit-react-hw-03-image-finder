import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';

import { getImages } from 'services/getPixabayAPI';

export class App extends Component {
  state = {
    query: '',
    images: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      getImages(this.state.query)
        .then(response => {
          // const { id, largeImageURL, webformatURL } = response.data.hits;
          const data = response.data.hits;
          console.log(data);
          console.log(this.state.images);
          this.setState({
            images: data,
          });
          console.log(this.state.images);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  onSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
      </>
    );
  }
}
