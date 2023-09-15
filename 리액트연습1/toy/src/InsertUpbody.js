const InsertUpbody =()=>{
    return(
        <div className='inputex'>
<table>
    <tbody>
        <tr>
            <td>이름</td>
            <td><input></input></td>
        </tr>
        <tr>
            <td>부위</td>
            <td><select>
                    <option>가슴</option>
                    <option>등</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>한마디</td>
            <td><input></input></td>
        </tr>
        <tr>
            <td colSpan='2'><button>글등록하기</button></td>
           
        </tr>
    </tbody>
</table>
</div>
    )
}
export default InsertUpbody;