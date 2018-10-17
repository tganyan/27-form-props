import React from 'react';
// import PropTypes from 'prop-types';
// import SearchForm from '../search-form/search-form';

class RedditItem extends React.Component {

  render() {
    return (
        <li key={this.props.key}>
          <a src={`https://www.reddit.com${this.props.article.data.permalink}`}>{this.props.article.data.title}</a>
          {
            console.log(this.props.article.data.permalink)
          }
        </li>

    );
  }
}

export default RedditItem;
