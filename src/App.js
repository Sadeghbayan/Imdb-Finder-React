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
  componentDidMount() {
    var json = localStorage.getItem('movies');
    const results = JSON.parse(json);
    this.setState({
      results
    })
  }

  handleSearch = (e) => {
    var query = e.target.elements.query.value;
    var self = this;
    axios.get("https://www.omdbapi.com/?s=" + query + "&page=1&apikey=66ff68e5")
      .then(function (response) {
        if (response.data.Error) {
          return false;
        } else {
          self.setState({
            results: response.data.Search
          });
          localStorage.setItem('movies', JSON.stringify(response.data.Search))
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="header text-center">
          <h2 className="title">Find Your Favorite Movies</h2>
          <SearchForm queryHanlder={this.handleSearch} />
        </div>
        <div className="content">
          <Grid>
            <Row className="show-grid">
              {
                this.state.results && this.state.results.length !== 0 && this.state.results.map(function (result, i) {
                  return <SearchResult dataResult={result} key={i} />
                })
              }
              {
                this.state.results && this.state.results.length === 0 ? (
                  <div className="list--empty text-center d-block">
                    <p>Awww! We don't have the Movie you are looking for.</p>
                  </div>
                ) : false
              }
            </Row>

          </Grid>
        </div>
      </div>
    )
  }
}
export default App;
