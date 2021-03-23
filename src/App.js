import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
import Wellcome from './components/Wellcome';
import LatestRelease from './components/LatestRelease';

function App() {
  return (
    <div className='App'>
      <MyNav title='BookStore' />
      <Footer />
      {/* <Footer className={'fixed-bottom'} /> */}
      <Wellcome />
      <LatestRelease />
    </div>
  );
}

export default App;

// "asin": "0316438960",
//     "title": "The Last Wish: Introducing the Witcher",
//     "img": "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
//     "price": 9.59,
//     "category": "fantasy"

//  <section>
//     <h5></h5>
//    <Row>
//             <Col>
//               <Card>
//                 <Card.Img variant='top' src='holder.js/100px180' />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make up
//                     the bulk of the card's content.
//                   </Card.Text>
//                   <Button variant='primary'>Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//  </section>
