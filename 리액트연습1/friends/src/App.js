
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import FriendInsert from './FriendInsert';
import FriendList from './FriendList';
import data from './data';
import { useRef, useState } from 'react';

function App() {

  const [FriendItem, setFriendItem] = useState(data);

  const dataId = useRef(4);

 const Navigate = useNavigate();

  const oncreate =(a)=>{
    a.id = dataId.current;
    dataId.current += 1;
    setFriendItem([...FriendItem, a]);
    Navigate('/');
  }

  const ondelete=(a)=>{
    console.log(a)
    const newfriend = FriendItem.filter((it)=>it.id !==a);
    setFriendItem(newfriend);
  }

  return (
    <div className="App">
    <h2>내짝꿍</h2>
    <Link to="/insert">친구추가하기 / </Link>
    <Link to="/">메인으로 가기</Link>
    
    <Routes>
      <Route path='/' element={<FriendList FriendList={FriendItem} ondelete={ondelete}/>}/>
    </Routes>
    <Routes>
      <Route path='/insert' element={<FriendInsert oncreate={oncreate}/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
