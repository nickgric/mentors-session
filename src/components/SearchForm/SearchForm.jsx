import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  onSubmit = event => {
    event.preventDefault();

    const {
      elements: { query },
    } = event.target;

    const { onFormSubmit } = this.props;

    onFormSubmit(query.value);
  };

  render() {
    const { onSubmit } = this;
    return (
      <>
        <h2>SearchForm</h2>
        <SearchFormStyled onSubmit={onSubmit}>
          <InputSearch name="query" />
          <FormBtn>
            <FiSearch />
          </FormBtn>
        </SearchFormStyled>
      </>
    );
  }
}
