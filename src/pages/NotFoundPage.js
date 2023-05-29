import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return ( 
        <>
        <h2>Error 404</h2>
        <button>
            <Link to='/'>Go back to HomePage</Link>
        </button>
        </>
     );
}
 
export default NotFoundPage;