import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default function Wellcome() {
  return (
    <Jumbotron fluid className='py-2'>
      <Container>
        <h1>Wellcome to the Bookstore</h1>
        <p>This is a little introduction I had to write</p>
      </Container>
    </Jumbotron>
  );
}
