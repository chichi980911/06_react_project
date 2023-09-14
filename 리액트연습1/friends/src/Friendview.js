const Friendview =({id,name,hobby,birthday,ondelete})=>{
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{hobby}</td>
            <td>{birthday}</td>
            <td><button onClick={()=>{
               if(window.confirm(`${id}번째 짝꿍을 삭제하실껀가요 ?`)){
                ondelete(id);
            }
            }}>삭제하기</button></td>
        </tr>
    )
}
export default Friendview;