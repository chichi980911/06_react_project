
import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Routes,Route } from 'react-router-dom';
import InsertFriend from './insertFriend';

function App() {

  let [mem,setmem] = useState(data);
 

  const onCreate =(no,name,hobby,born)=>{
    const newfriend ={
      no,
      name,
      hobby,
      born,
    }
    setmem([newfriend,...data])
    
  }
  
  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<>
          <div style={{textAlign:'center', fontSize:'20px' ,marginBottom:'20px' }}><b>글작성</b></div>
          <div><a href="/">메인으로가기</a> / <a href="/insert">친구추가하기</a></div>
      <table className='fd-table'>
        <thead className='fd-thead'>
          
          <th>번호</th>
          <th>이름</th>
          <th>취미</th>
          <th>생일</th>
          <th>기타</th>
          
        </thead>
        <tbody className='fd-tbody'>
        
         {
          mem.map((a,i)=>{
            return (
              <Member mem={mem} i={i} setmem={setmem} ></Member>
            )
          })

         }
        </tbody>
      </table>
        </>} />


        <Route path='/insert' element={<InsertFriend onCreate={onCreate}/>} /> 
      </Routes>
  
      
       

    </div>


  );
}

function Member(props,){
  console.log(props.mem)
  console.log(props.i)
  
  return(
    
  <tr>
  <td>{props.mem[props.i].no}</td>
  <td>{props.mem[props.i].name}</td>
  <td>{props.mem[props.i].hobby}</td>
  <td>{props.mem[props.i].born}</td>
  <td><button onClick={() =>{
    let copy=[...props.mem];
    copy.splice(props.i ,1);
    props.setmem(copy);
     
      
   
  } }>삭제</button></td>
</tr>
  )
  
}

export default App;
