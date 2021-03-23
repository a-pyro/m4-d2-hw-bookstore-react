import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
import Wellcome from './components/Wellcome';

function App() {
  return (
    <div className='App'>
      <MyNav title='BookStore' />
      <Footer />
      <Wellcome />
    </div>
  );
}

export default App;
