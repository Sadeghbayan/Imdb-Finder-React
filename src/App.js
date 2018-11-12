import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import SearchForm from './components/SearchFrom';
import SearchResult from './components/SearchResult';

class App extends Component {
  state = {
    query: '',
    results: []
  }
  handleSearch = (e) => {
    var query = e.target.elements.query.value;
    var self = this;
    axios.get("http://www.omdbapi.com/?s=" + query + "&page=1&apikey=66ff68e5")
      .then(function (response) {
        self.setState({
          results: response.data.Search
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Imdb Movie Finder</h1>
            <p>
              You Can Easily Search Movies From Imdb Archive.
            </p>
          </Grid>
        </Jumbotron>
        <div className="content">
          <Grid>
            <SearchForm queryHanlder={this.handleSearch} />
            <hr />
            <Row className="show-grid">            
                {
                  this.state.results && this.state.results.length > 0 && this.state.results.map(function (result, i) {
                    return <SearchResult dataResult={result} key={i} />
                  })
                }
            </Row>

          </Grid>
        </div>
      </div>
    )
  }
}

export default App;
