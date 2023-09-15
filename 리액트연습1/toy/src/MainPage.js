import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import picture1 from '../src/img/상체.jpg';
import picture2 from '../src/img/하체.jpg';
import picture3 from '../src/img/아무것도.jpg';
import picture5 from '../src/img/마사딕.jpg'

const Main = ()=>{
    return(
        <>
    <div className='main-bg'>
        <img src={picture5} alt='마사딕 이미지' width='1200px' height='100%' />
    </div>
      
      <div className='main2-writer'>
        <br></br>
        
      <Container className='container'>
      <h3>하고 싶은 것만 하면 그 약점은 평생 자기의 약점</h3>
          <h4>
            "이미 들어온 이상 선택 안하면 큰일남"
          </h4>
          <br></br>
        <Row>
          <Col>
          <Link to={"/upbody"}><img src={picture1} className='mainimg'  ></img></Link>
          <h4>상체</h4>
          <p>훌륭하다</p>
          </Col>
          <Col>
          <Link to={"/boom"}><img src={picture3} className='mainimg'  ></img></Link>
          <h4>나는 아무것도 안해</h4>
          <p>각오하고 눌러</p>
          </Col>
          <Col>
          
          <img alt='' src={picture2} className='mainimg'/>
          <h4>나는 하체</h4>
          <p>훌륭하다</p>
          </Col>
        </Row>
      </Container>
      

      <Routes>
        <Route path='/' />
        <Route />
        <Route />
      </Routes>



      <br></br><br></br>
      </div>
      </>
      )
}
export default Main;