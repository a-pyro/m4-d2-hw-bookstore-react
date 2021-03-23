import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <MyNav title='BookStore' />
      <Footer />
    </div>
  );
}

export default App;
