import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav,  } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Main from './MainPage';
import Boom from './Boom';
import UpBody from './UpBody';





function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">🔞</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/" >Main</Nav.Link>
            <Nav.Link href="/detail">등록페이지</Nav.Link>
          </Nav>
        </Navbar>
      </>
      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/boom' element={<Boom></Boom>}/>
        <Route path='/upbody' element={<UpBody></UpBody>}/>
        <Route path='/boom' element={<Boom></Boom>}/>
      </Routes>
    </div>
  );
}

export default App;
