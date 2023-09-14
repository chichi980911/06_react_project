import Friendview from "./Friendview";
const FriendList = ({ondelete,FriendList})=>{
    return(
    <table >
        <thead>
            <tr>
            <th>번호</th>
            <th>이름</th>
            <th>취미</th>
            <th>생일</th>
            <th>기타</th>
            </tr>
        </thead>
        <tbody>
            {FriendList.map(function(it){
                return(
                    <Friendview key={it.id} {...it} ondelete={ondelete}/>
                )

            })}
            

        </tbody>

    </table>
    )   
}
FriendList.defaultProps = {
    FriendList : []
}
export default FriendList;