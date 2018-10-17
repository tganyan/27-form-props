import React from 'react';
// import PropTypes from 'prop-types';
// import SearchForm from '../search-form/search-form';

class RedditItem extends React.Component {

  render() {
    return (
        <li>
          <a src={`https://www.reddit.com${this.props.redditList.data.permalink}`}>{this.props.redditList.data.title}</a>
        </li>
    );
  }
}

export default RedditItem;
