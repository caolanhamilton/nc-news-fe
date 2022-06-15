import { Link } from "react-router-dom";

export const Error = ({ error }) => { 
    return (
      <div className="error">
        <h1>We have a problem 😥</h1>
        {error && <h2>Sorry, {error.message.toLowerCase()}.</h2>}
        {!error && <h2>Sorry, path does not exist.</h2>}
        <Link to="/"><h3>Click here to return home!</h3></Link>
      </div>
    );
}