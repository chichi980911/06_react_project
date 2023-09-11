/*eslint-disable */



import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동 맛집'
  let [title, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setmodal] = useState(false);

  [1, 2, 3].map(function (a) {
    return '12132342'
  })






  // let [logo,setLoge] = useState('ReactBlog'); 자주쓰지않는 건 state로 만들 필요 없음

  //반복문  let [title, b] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  // function repeatTitle(title){
  //   let arr = [];
  //   for(let i =0; i<title.length; i++){
  //     arr.push(
  //       <div className='list'>
  //         <h4>{title[i]}</h4>
  //         <p>9월 11일 발행</p>
  //        </div>
  //     )
  //   }
  //   return arr;
  // }

  // function 함수(){
  //   console.log(1);
  // }




  return (
    <div className="App">
      <Navbar></Navbar>

      {/* {repeatTitle(title)} */}


      {/* <button onClick={()=>{b(['여자코트추천',title[1],title[2]])}}>클릭</button> */}

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        b(copy);

      }}>클릭</button>

      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        b(copy);
      }}>가나다순 정렬</button>


      {/* <div className='list'>
        <h4>{title[0]} <span onClick={() => { 따봉변경(따봉 + 1) }} >👍</span>{따봉}</h4>
        <p>9월 11일 발행</p>
      </div>

      <div className='list'>
        <h4>{title[1]}</h4>
        <p>9월 11일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {
          modal == true ? setmodal(false) : setmodal(true)
        }}>{title[2]} </h4>
        <p>9월 11일 발행</p>
      </div> */}

      {
        title.map(function (a,i) { //a : 값 자체, i : 인덱스
          return (
            <div className='list'>
              <h4 onClick={() => {setmodal(!modal)}}> {title[i]} <span onClick={() => {
                let copy = {...따봉};
                copy[i] = copy[i] +1;
                따봉변경(copy)
              }} >👍</span>{따봉[i]}</h4>
              <p>9월 11일 발행</p>
            </div>
            
          )
        })
      }

       {
        
       }
     

      
      {
        modal == true ? <Modal b={b} title={title} /> : null
      }


    </div>
    
  );
}

function Modal(props) {
  console.log(props)

  return (
    // <>
    <div className='modal'>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내역</p>
      <button onClick={() => {props.b(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'])}} >글수정</button>
    </div>

    // </>
  );
}

function Navbar() {
  return (
    <div className="black-nav" >
      <h4>ReactBlog</h4>
    </div>
  );
}

export default App;

/*
  JSX 문법 특징
  
  1.class 속성 부여할 땐 className 으로 부여할 것!
  2.변수 넣을 땐 {중괄호}
  3.스타일 속성 부여할 때 style={{스타일명: '값'}} 로 표현할 것
  4.이벤트 핸들러 달때는 안에 함수 이름을 넣어야한다.

  *state 만드는법
  1.import (useState) 
  2.useState(보관할 자료)
  3.let[작명1,작명2]
    >작명1 : state에 보관했던 자료가 나온다
    >작명2 : state를 변경하기 위해 함수

  *state 사용이유
    >일반 변수 : 변경되면 html 자동 렌더링 되지 않음
    >state : 변경되면 html 자동 렌더링 됨

  *state 언제 쓰나
    >변동시 자동으로 html에 반영되게 만들고 싶다면
    State 사용할 것 

  *state 변경 하는 법
    >state변경함수(새로운state의 값)
  
  *state 변경 함수 특징
    >기존 state == 신규 state의 경우 변경 안해줌

  *array / object 특징
    >array / object 담은 변수에는 주소값만 저장됨

  *컴포넌트 만드는 법
  1.function 만들고
  2.return () 안에 html 담기
  3.<함수명></함수명> 쓰기

  *컴포넌트로 만들면 좋은점
  1. 반복적인 html 축약할 때
  2. 큰 페이지들
  3. 자주 변경되는 것들

  *컴포넌트의 단점
  1.state 가져다 쓸 때 문제가 발생
  2.

  *동적인 UI 만드는 방법
  1. HTML,CSS로 미리 디자인 완성
  2. UI의 현재 상태를 state로 저장
  3. state에 따라 UI가 어떻게 보일지 작성

  *map 함수 특징
  1.Array 자료 갯수 만큼 함수안의 코드 실행해준다.
  2.함수의 파라미터는 array안에 있던 자료임
  3.return문에 값을 적으면 array에 담아줌

  *map 함수 특징2 (state와 함께 썼을때)
  1. 왼쪽 array 자료만큼 내부코드 실행해줌
  2. return(html 코드) => html 코드를 array로 담아줌
  3. 유용한 파라미터 2개 사용 가능

 *부모 > 자식 state 전송하는법
 1. 자식 컴포넌트 작명 = {state이름}>
 2. props 파라미터 등록
 3. props. 작명사용가능

*/
