import React from 'react';
import {Button, Form, FormControl, FormGroup} from "react-bootstrap";

const SearchForm = () => (
    <Form inline>
        <FormGroup controlId="formInlineEmail">
        <FormControl type="search" placeholder="enter something..." />
        </FormGroup>
        {' '}
        <Button type="submit">
            search
        </Button>
    </Form>
);

export default SearchForm;