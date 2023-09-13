import { useState } from "react";

const InsertFriend =({onCreate})=>{
    

    const [state,setState] = useState({
        no:"",
        name:"",
        hobby:"",
        born:"",
    });

    const changeState =(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    const changesubmit = ()=>{
       onCreate(state.no,state.name,state.hobby,state.born);
       setState({
        no:"",
        name:"",
        hobby:"",
        born:"",
       })
       console.log(setState)
    }
    
    return(
        
        <div className="insertFriend">
            <h2>내짝꿍</h2>

            <div><a href="/">메인으로가기</a> / <a href="/insert">친구추가하기</a></div>
            <div> 친구추가</div>

            <div>번호 : <input
                name="no"
                value={state.no}
                onChange={changeState}
            /></div>
            <div>이름 : <input 
                name="name"
                value={state.name}
                onChange={changeState}/></div>
            <div>취미 : <input
                name="hobby"
                value={state.hobby}
                onChange={changeState}/></div>
            <div>생일 : <input type="date"
                name="born"
                value={state.born}
                onChange={changeState}></input></div>
            <div><button onClick={changesubmit}>추가</button></div>
            
        </div>

    )

}

export default InsertFriend;