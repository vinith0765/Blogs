import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="Not_found">
            <h2>Sorry</h2>
            <p>That page cannot found</p>
            <Link to="/">Back to the homepage... </Link>
        </div>
     );
}
 
export default NotFound;