import { useContext } from "react"
import { UserContext } from "../Contexts/User"
export const Header = () => { 
    const { username } = useContext(UserContext)
    return (
      <>
        <h1 className="mainHeader">NC News</h1>
        <h2 className="userNameDisplay">Logged in: {username}</h2>
      </>
    );
}