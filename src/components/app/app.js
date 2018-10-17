import '@babel/polyfill';
import React from 'react';
import superagent from 'superagent';
import SearchForm from '../search-form/search-form';
import ResultItem from '../search-results/search-results-list';
import Header from '../header/header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.redditList = [];
  }

  handleUserInput = async (searchTerm, searchLimit) => {
    const REDDIT_API = `https://www.reddit.com/r/${searchTerm}.json?limit=${searchLimit}`;
    return superagent.get(REDDIT_API)
        .then(response => {
          if (response.body.data) {
            this.setState({redditList: response.body.data.children});
          }
        })
        .catch(console.error)
  }

  render() {
    return (
        <main>
          <Header />
          <SearchForm
            handleUserInput = {this.handleUserInput}
          />
          <ul>
            {
              this.state.redditList.map((currentArticle, index) => {
                if (currentArticle) {
                  return <ResultItem
                      article = {currentArticle}
                      key = {index}
                  />
                } else {
                  <h5>The search term you entered does not exist</h5>
                }
              })
            }
          </ul>
        </main>
    );
  }
}

export default App;
