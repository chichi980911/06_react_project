const DiaryItem = ({author,content,create_date,emotion,id,onDelete})=>{
    return(
        <div className="DiaryItem">
            <div className="info">
                <span>작성자 : {author} | 감정점수 : {emotion}</span>
                <br/>
                <span className="date"> {new Date(create_date).toLocaleString()}</span>
            </div>
            <div className="content">{content}</div>
            <div><button 
            onClick={()=>{
                if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
                    onDelete(id);
                }
            }}
            >글 삭제하기</button></div>
        </div>
    )
}
export default DiaryItem;