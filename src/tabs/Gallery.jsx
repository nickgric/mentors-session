import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      ImageService.getImages(query, page).then(result => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...result.photos],
        }));
      });
    }
  }

  onFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { onFormSubmit } = this;
    return (
      <>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <SearchForm onFormSubmit={onFormSubmit} />
      </>
    );
  }
}
