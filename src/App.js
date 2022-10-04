import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/ContainerForm';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div style={{backgroundColor: '#eee'}}>
    <Header/>
    <Container >
      <Form/>
    </Container>
    </div>
  );
}

export default App;
