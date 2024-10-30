import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <img src="" alt="" />
        <h1>Delicously vegan</h1>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Link to="/">Login</Link>
    </header>
  );
}