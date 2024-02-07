import {Link} from "react-router-dom";
import './NotFound.css'
export default function NotFound(){
    return(
        <section className="Com-soon">
            <div className="container com-soon-container">
                <h2>Coming Soon...</h2>
                <Link to={'/'} className="btn btn-border">Go To Home</Link>
            </div>
        </section>
    )
}