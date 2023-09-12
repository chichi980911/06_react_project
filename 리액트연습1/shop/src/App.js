
import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Button, Navbar, Nav, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

function App() {


  let [shoes] = useState(data);
  


  return (
    <div className="App">


      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">cart</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        

      </>

      <Routes>
        <Route path='/' element={<div>메인페이지임<><div className='main-bg'>
        </div>
          <Container>
            <Row>
              {/* <Shoes shoes={shoes[0]} i={0}></Shoes>
                  <Shoes shoes={shoes[1]} i={1}></Shoes>
                  <Shoes shoes={shoes[2]} i={2}></Shoes> */
              }

              {
                shoes.map((a, i) => {
                  return (
                    <Shoes shoes={shoes[i]} i={i + 1}></Shoes>
                  )
                })

              }
            </Row>
          </Container></></div>} />
        <Route path='/detail' element={<div>상세페이지<><div className='main-bg'>
        </div>
          <Container>
            <Row>
              {/* { <Shoes shoes={shoes[0]} i={0}></Shoes>
                  <Shoes shoes={shoes[1]} i={1}></Shoes>
                  <Shoes shoes={shoes[2]} i={2}></Shoes> 
              } */}

              {
                shoes.map((a, i) => {
                  return (
                    <Shoes shoes={shoes[i]} i={i + 1}></Shoes>
                  )
                })

              }
            </Row>
          </Container></></div>} />
        <Route path='/about' element={<div>about페이지<><div className='main-bg'>
        </div>
          <Container>
            <Row>
              {/* <Shoes shoes={shoes[0]} i={0}></Shoes>
                  <Shoes shoes={shoes[1]} i={1}></Shoes>
                  <Shoes shoes={shoes[2]} i={2}></Shoes> */
              }

              {
                shoes.map((a, i) => {
                  return (
                    <Shoes shoes={shoes[i]} i={i + 1}></Shoes>
                  )
                })

              }
            </Row>
          </Container></></div>} />
      </Routes>

    </div>


  );
}


function Shoes(props) {
 
  return (
    <Col sm>
      <img src={'https://lovesykkkk.github.io/shoes' + (props.i) + '.jpg'} width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}원</p>
    </Col>
  )
}




export default App;
