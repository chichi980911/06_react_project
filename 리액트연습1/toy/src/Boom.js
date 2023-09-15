import { Link } from 'react-router-dom';
import picture4 from '../src/img/이노무자슥.jpeg'

const Boom =()=>{
    return(
        <>
        <div className="boom-container">
          <div> <Link to={'/'}><img src={picture4} width='1000PX' height='500px' ></img></Link></div>
        </div>
        <div className="boom-container2">

        </div>
        </>
    )
}
export default Boom;