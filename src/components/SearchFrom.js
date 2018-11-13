import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Form inline onSubmit={this.props.queryHanlder}>
                    <FormGroup controlId="formInlineName">
                        <FormControl name="query" className="searchBox" type="text" placeholder="Interstellar, Dark Knight, TinTin, ..." />
                    </FormGroup>
                    {' '}
                    <Button className="search_btn" type="submit">Search</Button>
                </Form>
            </div>
        );
    }
}
//

export default SearchForm;