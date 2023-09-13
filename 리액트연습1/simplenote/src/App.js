import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList =[
  // {
  //   id:1,
  //   author: "김상호",
  //   content: "하이 1",
  //   emotion: 5,
  //   create_date: new Date().getTime(),
  // },
  // {
  //   id:2,
  //   author: "홍상호",
  //   content: "하이 2",
  //   emotion: 2,
  //   create_date: new Date().getTime(),
  // },
  // {
  //   id:3,
  //   author: "챠상호",
  //   content: "하이 3",
  //   emotion: 3,
  //   create_date: new Date().getTime(),
  // }
]

function App() {
  
  const [data,setData] = useState([]);

  const dataId = useRef(0);


  const onCreate = (author,content,emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id : dataId.current 
    }
    dataId.current  += 1; 
    setData([newItem, ...data])
  }

  const onDelete =(targetId)=>{
    
    const newDiaryList = data.filter((it)=> it. id !== targetId);
    setData(newDiaryList);
    
  }
  return (
    <div className="App">
     
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
