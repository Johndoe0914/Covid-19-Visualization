import React from "react";
import {Form, Button} from "react-bootstrap"
import Container from "react-bootstrap/Container"

const Searchbar = ({handleChange, handleSubmit}) => {

    
    return (
        <div style={{ margin:'0px 100px 100px 100px'}}>
            <Form onSubmit={() => handleSubmit()}>
     
     <Form.Label>Search By Country</Form.Label>
   <span style={{ }}>
   <Form.Control onChange={() => handleChange}type="text" placeholder="Search covid cases" rows="6" />
         <Button variant="primary">Search</Button>
   </span>
         </Form>
        </div>
    )
}

export default Searchbar