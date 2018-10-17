import React from 'react';
import PropTypes from 'prop-types';

class RedditItem extends React.Component {

  render() {
    return (
        <li key={this.props.key}>
          <a href={`https://www.reddit.com${this.props.article.data.permalink}`} target='_blank' rel='noopener noreferrer'>{this.props.article.data.title}</a>
        </li>

    );
  }
}

RedditItem.propTypes = {
  article: PropTypes.object,
  data: PropTypes.object,
  permalink: PropTypes.string,
  title: PropTypes.string,
  key: PropTypes.number,
}

export default RedditItem;
