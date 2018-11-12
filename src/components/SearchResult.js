import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap'
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = ''
    }

    render() {
        return (
            <Col xs={6} md={4}>
                <div className="card">
                    <div className="card__title">
                        {this.props.dataResult.Title}
                    </div>
                </div>
            </Col>

        );
    }
}

export default SearchResult;