import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.searchTerm = this.props.title || 'cats';
    this.state.searchLimit = this.props.searchLimit || 10;
  }

  handleSearchTerm = event => {
    this.setState({searchTerm: event.target.value})
  }

  handleSearchLimit = event => {
    this.setState({searchLimit: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleUserInput(this.state.searchTerm, this.state.searchLimit);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
              name='search-term'
              value={this.props.searchTerm}
              onChange={this.handleSearchTerm}
          />
          <label htmlFor='search-term'>Enter your search term</label>
          <input
              name='search-limit'
              value={this.props.searchLimit}
              onChange={this.handleSearchLimit}
          />
          <label htmlFor='search-limit'>Enter the results limit</label>
          <button type='submit'>submit</button>
        </form>
    );
  }
}

SearchForm.propTypes = {
  handleUserInput: PropTypes.func,
  searchTerm: PropTypes.string,
  searchLimit: PropTypes.number,
}

export default SearchForm;
