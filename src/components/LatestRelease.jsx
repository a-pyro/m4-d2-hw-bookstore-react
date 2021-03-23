import React, { Component } from 'react';
import fantasy from '../data/fantasy.json';
// import history from '../data/history.json';
// import horror from '../data/horror.json';
// import romance from '../data/romance.json';
// import scifi from '../data/scifi.json';
import {
  Container,
  Row,
  Col,
  Card,
  ButtonGroup,
  Button,
} from 'react-bootstrap';

export default class LatestRelease extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {fantasy.map(({ asin, title, img, price, category }) => (
            <Col md={4} lg={3} key={asin} className='mb-3'>
              <Card className='h-100'>
                <Card.Img variant='top' src={img} alt='book cover' />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    <span>{category}</span>
                    <span>{asin}</span>
                  </Card.Text>
                  <ButtonGroup
                    aria-label='Basic example'
                    className='w-100 align-self-end'
                  >
                    <Button variant='primary'>{price}</Button>
                    <Button variant='info'>Info</Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
