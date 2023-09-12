import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>AZ</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><a href="/#about-me">About Me</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><Link to='/contact'>Contact Me</Link></li>
            </ul>
            
            
            
            
        </nav>
    );
}
 
export default Navbar;
<nav className="navbar">
    <h1>AZ</h1>
    <Link to='/'>Home</Link>
    <a href="#">About Me</a>
    <a href="#">About Me</a>
</nav>