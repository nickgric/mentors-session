import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    isShown: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      ImageService.getImages(query, page).then(result => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...result.photos],

          isShown: page < Math.ceil(result.total_results / 15),
        }));
      });
    }
  }

  onFormSubmit = query => {
    this.setState({ query });
  };

  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { onFormSubmit, handleClick } = this;
    const { photos, isShown } = this.state;
    return (
      <>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <SearchForm onFormSubmit={onFormSubmit} />
        <Grid>
          {photos.map(({ id, avg_color, alt, src }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img src={src.large} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>
        {isShown && <Button onClick={handleClick}>Load more</Button>}
      </>
    );
  }
}
