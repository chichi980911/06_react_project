import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import picture1 from '../src/img/상체.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';





const UpBody =()=>{

    const [따봉,따봉변경] = useState(0);
    const [따봉1,따봉변경1] = useState(0);
    const a = 0;

    return(
        <>
        <div className="boom-container">
        <br/><br/>
        <h2>무조건 하나만 해야한다면?</h2>
        <Container>
  <Row>
    <Col sm>
        <img src={picture1} className='mainimg'></img>
        <h4>가슴</h4>
        <span onClick={()=>{따봉변경(따봉+1);
                  }}>💪
                </span> {따봉}

    </Col>
    <Col>
    <br/><br/><br/><br/><br/><br/>
    <h2 >vs</h2>
    </Col>
    <Col sm><img src={picture1} className='mainimg'></img>
    <h4>등</h4>
    <span onClick={()=>{따봉변경1(따봉1+1);
                  }}>💪
                </span> {따봉1}
    </Col>
  </Row>
</Container>


<hr></hr>

</div>



        </>

    

    )
}
export default UpBody;