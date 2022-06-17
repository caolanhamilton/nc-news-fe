import { useContext } from "react"
import { UserContext } from "../Contexts/User"
import { Link } from "react-router-dom";
export const Header = () => { 
    const { username } = useContext(UserContext)
    return (
      <>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="mainHeader">NC News</h1>
        </Link>
        <h2 className="userNameDisplay">
          <span className="material-symbols-outlined" id="accountIcon">account_circle</span>
          {username}
        </h2>
      </>
    );
}