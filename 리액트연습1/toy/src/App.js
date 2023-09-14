import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">💪 </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">상세페이지</Nav.Link>
            <Nav.Link href="/detail">등록페이지</Nav.Link>
          </Nav>
        </Navbar>
      </>
      <div className='main-bg'>
        <div className='main-writer'>
          <h2>추천하는 운동루틴</h2>
          <p>
            초급자부터 고급자까지, 난이도에 따라 추천드립니다.
          </p>
        </div>
      </div>
      <br/><br/><br/>
      
      
      <Container>
        <Row>
          <Col>
          <h4>상체</h4>
          <img src='../src/img/상체/png' alt=''></img>
          </Col>
          <Col>
          <h4>하체</h4>
          <img alt='' src=''/>
          </Col>
        </Row>
      </Container>






      <Routes>
        <Route path='/' />



        <Route />
        <Route />
      </Routes>




    </div>
  );
}

export default App;
