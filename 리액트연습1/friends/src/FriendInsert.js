const FriendInsert =({oncreate})=>{
    const insert ={id:0,name:"",hobby:"",birthday:""}
    return (
        <div className="friendinsert">
            <div>
            이름 : <input
            onChange={(e)=>{
                insert.name =e.target.value;
            }}>
            </input>
            </div>
            <div>
            취미 : <input
             onChange={(e)=>{
                insert.hobby =e.target.value;
            }}>
            </input>
            </div>
            <div>
            생일 : <input
             onChange={(e)=>{
                insert.birthday =e.target.value;
            }}>
            </input>
            </div>
            <button onClick={()=>{
                oncreate(insert)
            }}>친구 추가하기</button>
        </div>
    )
}

export default FriendInsert;

